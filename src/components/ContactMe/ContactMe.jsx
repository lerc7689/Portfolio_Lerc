import "./ContactMe.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () =>{
    const notify = () => toast("email sent, thanks..!");
    return(
    <>
        <a name="contactMe"></a>
        <section className="contactMeContainer">
            <h1 className="contactMeTitle">Contact me</h1>
            <form action="https://formsubmit.co/luiseduardo7689@gmail.com" method="POST">
                    <div>
                        <label htmlFor="name">Complete name</label>
                        <input type="text" className="form-control" name='name' id="name" placeholder="name..."/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name='email' id="email" placeholder="email..."/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" name='message' id="message" rows="3" placeholder="write a message..."></textarea>
                    </div>
                <button  type="submit" onClick={notify}>Send</button>

                <ToastContainer />

                {/* Estos inputs son de formsubmit.co */}
                <input type="hidden" name="_next" value="http://localhost:5173/" />
                <input type="hidden" name="_captcha" value="false"/>

            </form>
        </section>
    </>)
}

export default ContactMe;