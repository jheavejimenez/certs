import React from "react";

export const Certificate: React.FC<{  }> = props => {
    const isApproved = localStorage.getItem("isApproved");
    return (
        <div>
            {isApproved === "true" ? <div>Certificate</div> : <div>Please wait for approval</div>}
        </div>
    );
};