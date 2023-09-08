import "./Remind.css";
function NewCustomer() {
  return (
    <>
      <div className="container">
        <div className="content-btn">
          <h3 className="h3-projects">اضافة عميل جديد</h3>
        </div>
      </div>
      <div class="logo-list">
        <div class="input-group">
          <label>اسم العميل</label>
          <input
            type="text"
            class="form-control"
            placeholder=" "
            aria-label="Username"
            aria-describedby="basic-addon1"
            fdprocessedid="7ejse8"
          />
        </div>
        <div class="input-group">
          <label>رقم العميل</label>
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
             اضافة العميل{" "}
          </button>{" "}
      </div>
    </>
  );
}

export default NewCustomer;
