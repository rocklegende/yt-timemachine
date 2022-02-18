import {Store} from "react-notifications-component";
import moment from "moment";

const defaultLocale = "en-US"

export const processYoutubeViewCount = (viewCountAsString: string) => {
    return parseInt(viewCountAsString).toLocaleString(defaultLocale);
}

export const processYoutubeDurationString = (ytDurationString: string): string => {
    const duration = moment.duration(ytDurationString);

    let strin = moment
        .utc(moment.duration(ytDurationString).asMilliseconds())
        .format('hh:mm:ss')
        .padStart(4, '0:0')


    if (Math.floor(duration.asHours()) === 0 && strin.length > 0) {
        strin = strin.substring(3)
    }

    return strin
}

export const showErrorMessage = (message: string) => {
    Store.addNotification({
        title: "Error",
        message: message,
        type: "danger",
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 3000,
            onScreen: true
        }
    });
}

export const showSuccessMessage = (message: string) => {
    Store.addNotification({
        title: "Success",
        message: message,
        type: "success",
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 3000,
            onScreen: true
        }
    });
}