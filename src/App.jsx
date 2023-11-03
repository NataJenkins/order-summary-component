import "./App.scss";
import DesktopPattern from "./assets/images/pattern-background-desktop.svg";
import MobilePattern from "./assets/images/pattern-background-mobile.svg";
import Illustration from "./assets/images/illustration-hero.svg";
import MusicIcon from "./assets/images/icon-music.svg";

function App() {
    return (
        <main className="container">
            <div className="bg-curve">
                <img src={DesktopPattern} className="desktop-pattern" alt="" />
                <img src={MobilePattern} className="mobile-pattern" alt="" />
            </div>
            <div className="card">
                <img src={Illustration} alt="" className="illustration" />
                <div className="content">
                    <h1 className="title"> Order Summary</h1>
                    <p className="description">
                        You can now listen to millions of songs, audiobooks, and
                        podcasts on any device anywhere you like!
                    </p>
                    <div className="summary">
                        <div className="left">
                            <img src={MusicIcon} alt="" className="icon" />
                            <div className="plan">
                                <p className="label">Annual Plan</p>
                                <p className="price">$59.99/year</p>
                            </div>
                        </div>
                        <button className="action" onClick={() => null}>
                            Change
                        </button>
                    </div>
                    <div className="buttons">
                        <button className="submit" onClick={() => null}>
                            Proceed to Payment
                        </button>
                        <button className="cancel" onClick={() => null}>
                            Cancel Order
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
