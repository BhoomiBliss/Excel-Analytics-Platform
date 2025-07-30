


import "../styles/Home.css";


export function Home() {
 
  return (
    <>
    <div
      className="home-bg"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')`,
      }}
    >
      <div className="home-content">
        <h1 className="home-title">Excel File Analytics</h1>
        <p className="home-desc">
          Effortlessly upload, view, and analyze your Excel files online. Our platform offers instant statistics, chart visualizations, and secure file management for all your spreadsheet needs.<br/>
         <span>A detective or investigator for spreadsheets.</span>
        </p>
        
      </div>
    </div>
    
   
    </>
  );
}

