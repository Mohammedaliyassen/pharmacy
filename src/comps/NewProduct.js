import "./Remind.css";
function NewProduct() {
  return (
    <>
      <div className="container">
        <div className="content-btn">
          <h3 className="h3-projects">اضافة دواء جديد</h3>
        </div>
      </div>
      <div class="logo-list">
        <div class="input-group">
          <label>حدد صورة الدواء</label>
          <input
            type="file"
            class="form-control"
            placeholder=" "
            aria-label="Username"
            aria-describedby="basic-addon1"
            fdprocessedid="7ejse8"
          />
        </div>
        <div class="input-group">
          <label> اسم الدواء</label>
          <input
            className="input"
            type="text"
            class="form-control"
            placeholder=" "
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            fdprocessedid="hkdmn"
          />
        </div>
        <div class="input-group">
          <label> سعر الدواء</label>
          <input
            className="input"
            type="text"
            class="form-control"
            placeholder=" "
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            fdprocessedid="hkdmn"
          />
        </div>
  
 
        <button
            style={{
              backgroundColor: "#212a31 ",
              color: "white",
              border: "none",
              textDecoration: " none;",
              margin:"auto",
              width:"300px",
              marginTop:"70px"
         
            }}
          >
            {" "}
             اضافة الدواء{" "}
          </button>{" "}
      </div>
    </>
  );
}

export default NewProduct;
