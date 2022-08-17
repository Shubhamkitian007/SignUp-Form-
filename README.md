---
                        <div>
                            <label className="form_elements" htmlFor="name">Name </label>
                            <input type="text" name="name" className="input_box form_elements" id="name" value={this.state.name} onChange={this.onInputChange} placeholder="Enter Your Name..."/>
                        </div>
                        <div>
                            <label className="form_elements" htmlFor="email">Email </label>
                            <input className="input_box form_elements" type="text" name="email" placeholder="Your email id.." value={this.state.email} id="email" onChange={this.onInputChange}/>
                        </div> 
                        <label className="form_elements" htmlFor="rate">Rating :</label>
                        <input className="input_box form_elements" type="number" id="rate" value={this.state.value} name="rating" onChange={this.onInputChange}/>
                        <br />
                        <button className="dynamic_button" type="submit" onClick={this.onFormSubmit.bind(this)}>Submit</button>
