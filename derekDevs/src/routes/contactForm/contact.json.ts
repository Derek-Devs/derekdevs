export const post = async (request: { body: { get: (arg0: string) => unknown; }; }) => {

    const formID = "1FAIpQLSfZtZXUDl0L2uNG8EqLebJ80QDWPnT6GkA-t3SRiFWda3XgZQ"

    const name = request.body.get("name")
    const email = request.body.get("email")
    const message = request.body.get("message")

    const res = 
    await fetch(`https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.2047751713=${name}&entry.1747788544=${email}&entry.688750007=${message}&submit=Submit
    `);

    if(res.status === 200) {
        return{
            status: 200,
            body: {
                message: "success"
            },
        };
    } else {
        return {
        status: 404,
        body: {
            message: "error",
            },
        };
    }
};