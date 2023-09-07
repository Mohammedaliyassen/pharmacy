import './Remind.css'
function Remind() {
    return (
        <>
            <div className="container">
                <div className="content-btn">
                    <a
                        style={{ color: "white", width: "152px" }}
                        href="/"
                    >
                        {" "}

                        <button style={{}}> حفظ  </button>{" "}
                    </a>
                    <h3 className="h3-projects">تذكير</h3>
                </div>
            </div>
            <div class="logo-list" >
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="اسم العميل" aria-label="Username" aria-describedby="basic-addon1" fdprocessedid="7ejse8"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="رقم العميل" aria-label="Recipient's username" aria-describedby="basic-addon2" fdprocessedid="hkdmn"/>

                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="productName" aria-describedby="basic-addon3" fdprocessedid="51y6m9" placeholder="اسم العلاج" />
                        <span class="input-group-text">V</span>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="hours" aria-describedby="basic-addon3" fdprocessedid="51y6m9" placeholder=" عدد الساعات" />
                    <input type="text" class="form-control" id="days" aria-describedby="basic-addon3" fdprocessedid="51y6m9" placeholder=" عدد الايام" />
                        {/* <span class="input-group-text">$</span> */}
                </div>
                <div class="input-group" >
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                    <span class="input-group-text" >رسالة التذكير</span>
                </div>
                <a style={{ backgroundColor: "#212a31 ", width: "152px", textDecoration:'none'}} href="/">

                        <button style={{backgroundColor: "#212a31 ", color:'white',border:'none',textDecoration:' none;'}}> حفظ  </button>{" "}
                    </a>
            </div>
        </>
    )
}


export default Remind;