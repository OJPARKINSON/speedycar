import React, {Component} from 'react';
import app from './firebaseConfig.js';
import { Link } from 'react-router-dom';
import 'firebase/firestore';

class Home extends Component {
    componentDidMount() {
        this.updateTable();
    }
    updateTable() {
        const db = app.firestore();
        db.collection("vehicle").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id}  ${doc.data().vType}  ${doc.data().Make}  ${doc.data().Model}  ${doc.data().Colour}  ${doc.data().fuelType}  ${doc.data().Price}  ${doc.data().Milage}  ${doc.data().motDate}  ${doc.data().Capacity}  ${doc.data().bikeType}`);
            });
        });
    }
    addVehicle(e) {
        e.preventDefault();
        const db = app.firestore();
        db.collection("vehicle").doc(this.Registration.value).set({
        Registration: this.Registration.value,
        vType: this.vType.value,
        Make: this.Make.value,
        Model: this.Model.value,
        Colour: this.Colour.value,
        fuelType: this.fuelType.value,
        Price: this.Price.value,
        Milage: this.Milage.value,
        motDate: this.motDate.value,
        Capacity: this.Capacity.value,
        bikeType: this.bikeType.value
        });
        this.refs.form.reset();
    };
    render() {
        return (
            <>
            <div className="App">
                <header className="App-header">
                <h1>Speedy Cars</h1>
                </header>
                <form onSubmit={this.addVehicle.bind(this)} ref='form'>
                    <input name="Registration" placeholder="Registration" ref={Registration => this.Registration = Registration}  />
                    <select placeholder="vType" ref={vType => this.vType = vType}>
                        <option value="Car">Car</option>
                        <option value="LGV">LGV</option>
                        <option value="Bike">Bike</option>
                    </select>
                    <input ref={Make => this.Make = Make}  placeholder="Make" />
                    <input ref={Model => this.Model = Model}  placeholder="Model" />
                    <input ref={Colour => this.Colour = Colour}  placeholder="Colour" />
                    <input ref={fuelType => this.fuelType = fuelType}  placeholder="Fuel Type" />
                    <input ref={Price => this.Price = Price}  placeholder="Price" />
                    <input ref={Milage => this.Milage = Milage}  placeholder="Milage" />
                    <input ref={motDate => this.motDate = motDate} type="date"  placeholder="MOT Date" />
                    <input ref={Capacity => this.Capacity = Capacity}  placeholder="Capacity" />
                    <input ref={bikeType => this.bikeType = bikeType}  placeholder="Bike Type" />
                    <input type="submit" />
                </form>
                <button onClick={() => this.updateTable()}>Refresh Table</button>
            </div>
            <Link to="/SignUp">SignUp</Link>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </>
        )
    }
}

export default Home;