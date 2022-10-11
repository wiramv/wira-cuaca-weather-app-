

const Contact = () => {
    return(
        <div className="contact main-blur">
            <div className="contact-data">
            <div className="contact-title h3">Contact</div>
            <form action="https://formsubmit.co/wiramv@gmail.com" method="POST">
                <input type="text" placeholder="name" name="name" required/>
                <input type="email" name="email" placeholder="email"  required/>
                <input type="tel" name="phone" placeholder="phone number" required/>
                <div className="control-group">
                <label htmlFor="reson">Reason for Contact</label>
                <select name="job Offer" required>
                    <option value="job">Job Offer</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="networking">Networking</option>
                    <option value="colab">Collaboration Project</option>
                </select>
                </div>
                <textarea name="message"  cols="30" rows="10" placeholder="message"></textarea>
                <input className="btn-fill" type="submit" value="send" />
            </form>
            </div>
        </div>
    )
}

export default Contact