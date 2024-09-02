import React from "react"
import { FaUsers } from "react-icons/fa"

const CardContent = ({label, value, icon, iconColor}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="flex items-center justify-between">
                    <div className="widget-label">
                        <h3>{label}</h3>
                        <h1>{value}</h1>
                    </div>
                    <span className={`icon widget-icon ${iconColor}`}>
                        {React.cloneElement(icon)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardContent