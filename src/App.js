import React from 'react';
import firebaseConf from './firebase';
import './App.css';

class App extends React.Component {
  resetForm() {
    this.refs.contactForm.reset();
  }
  addVehicle(e) {
    e.preventDefault();
    const db = firebaseConf.firestore();
    db.collection("vehicle").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          console.log(doc.data());
      });
    });
    db.collection("vehicle").add({
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
  };
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Speedy Cars</h1>
        </header>
        <form onSubmit={this.addVehicle.bind(this)} ref='form'>
          <input name="Registration" placeholder="Registration" ref={Registration => this.Registration = Registration}  />
          <input name="vType" placeholder="vType" ref={vType => this.vType = vType}  />
          <input name="Make" ref={Make => this.Make = Make}  placeholder="Make" />
          <input name="Model" ref={Model => this.Model = Model}  placeholder="Model" />
          <input name="Colour" ref={Colour => this.Colour = Colour}  placeholder="Colour" />
          <input name="fuelType" ref={fuelType => this.fuelType = fuelType}  placeholder="Fuel Type" />
          <input name="Price" ref={Price => this.Price = Price}  placeholder="Price" />
          <input name="Milage" ref={Milage => this.Milage = Milage}  placeholder="Milage" />
          <input name="motDate" ref={motDate => this.motDate = motDate}  placeholder="MOT Date" />
          <input name="Capacity" ref={Capacity => this.Capacity = Capacity}  placeholder="Capacity" />
          <input name="bikeType" ref={bikeType => this.bikeType = bikeType}  placeholder="Bike Type" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;