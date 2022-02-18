import React, {FormEvent, useEffect, useState} from "react";
import {useAuth} from "./AuthContextProvider";
import {YTComment} from "./youtubeDataProvider";
import {showErrorMessage} from "./helper";
import "./commentSectionStyle.scss";

import moment from "moment";
import {useData} from "./DataContextProvider";

type CommentSectionProps = {
    videoId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({videoId}) => {
    const auth = useAuth();
    const dataContext = useData();
    const dataProvider = dataContext.dataProvider;
    const [page, setPage] = useState(1);
    const [comments, setComments] = useState<YTComment[]>([]);
    const [commentsCount, setCommentsCount] = useState(0);
    const [commentSubmissionDisabled, setCommentSubmissionDisabled] = useState(false);

    const fetchAndSetComments = async (pageNumber: number) => {
        const {data, error} = await dataProvider.getCommentsForVideo(videoId, pageNumber);
        if (!data) {
            showErrorMessage(`Fetching comments failed, reason: ${error}`)
            return;
        }
        setComments(data);
    }

    const fetchAndSetCommentsCount = async () => {
        const response = await dataProvider.getCommentsCount(videoId);
        if (response.count === null) {
            showErrorMessage(`Fetching comments count failed`)
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
            <div>
                { comments.map( (comment) => (
                    <div className={"comment"}>
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
                <button onClick={() => decreasePage()}>{"<"}</button>
                <span className={"page-number"}>{page}</span>
                <button onClick={() => increasePage()}>{">"}</button>
            </div>
        </div>
    )
}

export default CommentSection;