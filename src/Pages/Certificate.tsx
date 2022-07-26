import React from "react";

export const Certificate: React.FC<{  }> = props => {
   const isApproved = JSON.parse(localStorage.getItem("cert") || "{}").isApproved;
    return (
        <div>
            {isApproved === true ? <div>Certificate</div> : <div>Please wait for approval</div>}
        </div>
    );
};