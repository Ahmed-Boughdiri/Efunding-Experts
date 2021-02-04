export default function getStatus(status: String) {
  switch (status) {
    case "quoted now":
      return {
        status: "success",
        message: "Quoting Now"
      }
    case "waiting":
      return {
        status: "success",
        message: "Quoted Waiting on Contact",
      };
    case "not qualified":
      return {
        status: "primary",
        message: "doesn't qualify",
      };
    default:
      return {
        status: "success",
        message: "Quoted Waiting on Contact",
      };
  }
}
