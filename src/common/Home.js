import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="cta-container">
                <div className="call-to-action">
                    <h1>Get more productive <br/> with KNBN</h1>
                    <p>KNBN is a new way to organize your tasks, for you and your team</p>
                    <div className="cta-btn">
                        <h1>Get Started</h1>
                    </div>
                </div>
                {/* Visual */}
                <div className="cta-visuals">
                    <div className="table">
                        <h1>To Do</h1>

                        <div className="card">
                            <ul className="labels">
                                <li></li>
                            </ul>
                            <h1>Title</h1>
                            <p>This is the task</p>
                            <div className="profile-row">
                            <div className="profile">
                                <h1>TH</h1>
                            </div>
                            
                            <div className="profile profile-add">
                                <h1>+</h1>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <ul className="labels">
                                <li></li>
                            </ul>
                            <h1>Title</h1>
                            <p>This is the task</p>
                            <div className="profile-row">
                            <div className="profile">
                                <h1>TH</h1>
                            </div>
                            
                            <div className="profile profile-add">
                                <h1>+</h1>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <ul className="labels">
                                <li></li>
                            </ul>
                            <h1>Title</h1>
                            <p>This is the task</p>
                            <div className="profile-row">
                            <div className="profile">
                                <h1>TH</h1>
                            </div>
                            
                            <div className="profile profile-add">
                                <h1>+</h1>
                            </div>
                            </div>
                        </div>
                        <div className="add">
                            <h1>+</h1>
                        </div>
                    </div>

                    <div className="table">
                        <h1>Doing</h1>

                        <div className="card">
                            <ul className="labels">
                                <li></li>
                            </ul>
                            <h1>Title</h1>
                            <p>This is the task</p>
                            <div className="profile-row">
                            <div className="profile">
                                <h1>TH</h1>
                            </div>
                            
                            <div className="profile profile-add">
                                <h1>+</h1>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <ul className="labels">
                                <li></li>
                            </ul>
                            <h1>Title</h1>
                            <p>This is the task</p>
                            <div className="profile-row">
                            <div className="profile">
                                <h1>TH</h1>
                            </div>
                            
                            <div className="profile profile-add">
                                <h1>+</h1>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <ul className="labels">
                                <li></li>
                            </ul>
                            <h1>Title</h1>
                            <p>This is the task</p>
                            <div className="profile-row">
                            <div className="profile">
                                <h1>TH</h1>
                            </div>
                            
                            <div className="profile profile-add">
                                <h1>+</h1>
                            </div>
                            </div>
                        </div>
                        <div className="add">
                            <h1>+</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;