import React, {FormEvent, useEffect, useState} from "react";
import {useAuth} from "./AuthContextProvider";
import {YTComment} from "../providers/youtubeDataProvider";
import {showErrorMessage} from "../helpers/helper";
import "../styles/commentSectionStyle.scss";

import moment from "moment";
import {useData} from "./DataContextProvider";

type CommentSectionProps = {
    videoId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({videoId}) => {
    const auth = useAuth();
    const dataContext = useData();
    const dataProvider = dataContext.dataProvider;
    const [pageCount, setPageCount] = useState(1);
    const [page, setPage] = useState(1);
    const [comments, setComments] = useState<YTComment[]>([]);
    const [commentsCount, setCommentsCount] = useState(0);
    const [commentSubmissionDisabled, setCommentSubmissionDisabled] = useState(false);

    const fetchAndSetComments = async (pageNumber: number) => {
        const {commentsPageCount, data, error} = await dataProvider.getCommentsForVideo(videoId, pageNumber);
        if (!data) {
            console.error(`Fetching comments failed, reason: ${error?.message}`)
            return;
        }
        setComments(data);
        //@ts-ignore
        setPageCount(commentsPageCount);
    }

    const fetchAndSetCommentsCount = async () => {
        const response = await dataProvider.getCommentsCount(videoId);
        if (response.count === null) {
            console.error(`Fetching comments count failed, ${response.error?.message}`)
            return;
        }
        setCommentsCount(response.count);
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        if (!auth.user) {
            showErrorMessage("Can't create comment, you are not logged in")
            return;
        }

        const formData = new FormData(event.currentTarget);
        const {error, data} = await dataProvider.createComment({
            user_id: auth.user.id,
            video_id: videoId,
            //@ts-ignore
            text_content: formData.get("commentText")
        })
        if (error) {
            showErrorMessage("Couldnt create comment, reason: " + error)
            return;
        }
        await fetchAndSetComments(page);
        await fetchAndSetCommentsCount();
        // @ts-ignore
        event.target.reset();
    };

    useEffect(() => {
        fetchAndSetComments(page);
    }, [videoId, page])

    useEffect(() => {
        fetchAndSetCommentsCount();
    }, [videoId])

    useEffect( () => {
        setCommentSubmissionDisabled(auth.user === null)
    }, [auth.user])

    const parseCreationDate = (creationDate: string) => {
        return moment(creationDate).format('MMMM Do YYYY, h:mm')
    }

    const increasePage = () => {
        setPage(page + 1)
    }

    const decreasePage = () => {
        if (page > 1) {setPage(page - 1)}
    }

    return (
        <div className={"comment-section"}>
            <div className={"comment-section-header"}>
                <p><strong className={"comment-section-header-title"}>Comments </strong><span className={"comment-section-count"}>{commentsCount}</span></p>

            </div>

            <form className={"comment-creation-form"} onSubmit={(event) => handleSubmit(event)}>
                <textarea
                    disabled={commentSubmissionDisabled}
                    name="commentText"
                    placeholder={commentSubmissionDisabled ? "login to comment" : `comment as ${auth.getUserName()}`}
                    required/>
                <button
                    disabled={commentSubmissionDisabled}
                    style={{display: commentSubmissionDisabled ? "none" : "block"}}
                    type="submit"
                >
                    Submit comment
                </button>
            </form>
            <div className={"comment-display-container"}>
                { comments.map( (comment, index) => (
                    <div key={index} className={"comment"}>
                        <img className={"user-avatar large"} src={comment.user_avatar_url} />
                        <div>
                            <span className={"comment-header"}>
                                <strong>{comment.user_display_name}</strong> <i className={"comment-timestamp"}>{parseCreationDate(comment.created_at)}</i>
                            </span>
                            <p className={"comment-body"}>{comment.text_content}</p>
                        </div>

                    </div>

                ))}
            </div>
            <div className={"comment-section-pagination"}>
                <button disabled={page === 1} onClick={() => decreasePage()}><i className={"fa-solid fa-chevron-left"}></i></button>
                <span className={"page-number"}>{page} / {pageCount}</span>
                <button disabled={page === pageCount} onClick={() => increasePage()}><i className={"fa-solid fa-chevron-right"}></i></button>
            </div>
        </div>
    )
}

export default CommentSection;