export default function Signupform({ children }) {
    return (
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ flex: '20%' }}>
          {}
        </div>
  
        <div style={{ flex: '80%', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="form-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', backgroundColor: "#FCDDA8", borderRadius: "30px 0 0 30px", padding: '0 90px 0 0', height: 'inherit',boxShadow:"2px 9px 16px 2px " }}>
            <h1 style={{ fontWeight: 700, fontSize: "27px", marginBottom: "20px",textAlign:"left",marginRight:"330px" }}>Begin Your Journey</h1>
            <form style={{ width: '60%', paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "20px", marginTop: '20px' }}>
              <div className="input-container input-container-grid">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <input
                      type="text"
                      id="firstname"
                      placeholder=" "
                      style={{ borderRadius: '4px', border: '2px solid black' }}
                    />
                    <label htmlFor="firstname" className="border-label">First Name</label>
                  </div>
                  <div className="col-span-1">
                    <input
                      type="text"
                      id="lastname"
                      placeholder=" "
                      style={{ borderRadius: '4px', border: '2px solid black' }}
                    />
                    <label htmlFor="lastname" className="border-label1">Last Name</label>
                  </div>
                </div>
              </div>
  
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  style={{ borderRadius: '4px', border: '2px solid black' }}
                />
                <label htmlFor="email" className="border-label">Email</label>
              </div>
  
              <div className="input-container">
                <input
                  type="text"
                  id="mobile"
                  placeholder=" "
                  style={{ borderRadius: '4px', border: '2px solid black' }}
                />
                <label htmlFor="mobile" className="border-label">Mobile Number</label>
              </div>
  
              <div className="input-container">
                <input
                  type="text"
                  id="username"
                  placeholder=" "
                  style={{ borderRadius: '4px', border: '2px solid black' }}
                />
                <label htmlFor="username" className="border-label">User Name</label>
              </div>
  
              <div className="input-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" "
                  style={{ borderRadius: '4px', border: '2px solid black' }}
                />
                <label htmlFor="password" className="border-label">Password</label>
              </div>
  
           
  
              <button className="sendButton" style={{ color: "#FCDDA8", fontWeight: "bold", border: "2px solid black", backgroundColor: "#36454F", borderRadius: '4px' }} type="submit">
                Create Account
              </button>
            </form>
            {children}
          </div>
        </div>
      </div>
    );
  }