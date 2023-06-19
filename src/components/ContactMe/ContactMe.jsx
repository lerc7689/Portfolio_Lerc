import "./ContactMe.css";

const ContactMe = () =>{
    return(
    <>
        <a name="contactMe"></a>
        <section className="contactMeContainer">
            <h1 className="contactMeTitle">Contact me</h1>
            <form action="mailto:lerc7689@hotmail.com">
                    <label htmlFor="name">Complete name</label>
                    <input type="text" className="form-control" name='name' id="name" placeholder="name..."/>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name='email' id="email" placeholder="email..."/>
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" name='message' id="message" rows="3" placeholder="write a message..."></textarea>
                <button  type="submit">Send</button>
            </form>
        </section>
    </>)
}

export default ContactMe;