import React from 'react'

function Join_us() {
    return (
        <div style={{backgroundColor:"blue !Important"}}>
            <div style={{backgroundColor:"black",display:"flex",justifyContent:"center",position:"absolute",top:"0%",color:"white",margin:"auto",width:"100%"}}>
            <form style={{padding:"100px 0px",display:"flex" , flexDirection:"column"}}>
            <div style={{textAlign:"center"}}>
                <h1>Join Us</h1>
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">State</label>
                <select class="form-select" required aria-label="Default select example">
                    <option selected disabled>State</option>
                    <option value="1">Andra Pradesh</option>
                    <option value="2">Assam</option>
                    <option value="3">Karnataka</option>
                </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="We'll never share your email with anyone else"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                    <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="We'll never share your mobile number with anyone else"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Address</label>
                    <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">City</label>
                    <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">District</label>
                    <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Pincode</label>
                    <input type="number" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                    <label class="form-check-label" for="exampleCheck1">Aru you ready to Volunteer for free for the welfare of the students? </label>
                <div style={{display:"flex"}}>
                <div class="form-check">
                    <input class="form-check-input" required type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Yes
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" required type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        No
                    </label>
                    </div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" required class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">I accepted the terms and conditions </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Join_us
