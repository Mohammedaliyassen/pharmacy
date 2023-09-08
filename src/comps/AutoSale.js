import "./Remind.css";
function AutoScale() {
  return (
    <>
      <div className="container">
        <div className="content-btn">
          <h3 className="h3-projects">البيع التلقائي</h3>
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
        <div class="input-group">
          <label>اسم الدواء</label>
          <input
            type="text"
            class="form-control"
            id="productName"
            aria-describedby="basic-addon3"
            fdprocessedid="51y6m9"
            placeholder=" "
          />
        </div>
        <div class="input-group">
          <label>عدد الايام</label>
          <input
            type="text"
            class="form-control"
            id="hours"
            aria-describedby="basic-addon3"
            fdprocessedid="51y6m9"
            placeholder="  "
          />

          {/* <span class="input-group-text">$</span> */}
        </div>
        <div class="input-group">
          <label>عدد الساعات</label>
          <input
            type="text"
            class="form-control"
            id="days"
            aria-describedby="basic-addon3"
            fdprocessedid="51y6m9"
            placeholder="  "
          />

          {/* <span class="input-group-text">$</span> */}
        </div>

        <div class="input-group">
          <label>رسالة التذكير</label>
          <textarea class="form-control" aria-label="With textarea" style={{height:"300px" , marginTop:"20px"}}></textarea>
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
            بيع{" "}
          </button>{" "}
      </div>
    </>
  );
}

export default AutoScale;
