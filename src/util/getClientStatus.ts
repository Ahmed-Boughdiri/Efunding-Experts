
export default function getClientStatus(status: String) {
    switch(status) {
        case "processing":
            return {
                status: "success",
                message: "processing now"
            }
        case "on hold":
            return {
                status: "danger",
                message: "on hold"
            }
        case "closed":
            return {
                status: "secondary",
                message: "file closed"
            }
        default:
            return {
                status: "success",
                message: "processing now"
            }
    }
}
