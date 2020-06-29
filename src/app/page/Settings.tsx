import React from 'react'

export default function Settings() {
    return (
        <form id="settings">
            <label className="top">User Name
                 <input type="text" name="fname"></input>
            </label>
            <h2>Interface type</h2>
            <label className="sbs radio"><input type="radio" value="ligth" name="infterfaceType" />Ligth</label>
            <label className="sbs radio"><input type="radio" value="ligth" name="infterfaceType" />Dark</label>
            <h2>Clock display</h2>
            <label className="sbs radio"> <input type="radio" value="12" name="clockDisplay" />12 Hours</label>
            <label className="sbs radio"> <input type="radio" value="24" name="clockDisplay" />24 Hours</label>
            <h2> Send Message on CRTL + ENTER</h2>
            <label className="sbs radio"> <input type="radio" value="on" name="sendMessage" />On</label>
            <label className="sbs radio"> <input type="radio" value="off" name="sendMessage" />Off</label>
            <label className="top">
                Language
                    <select>
                    <option value=""> Please Select &#9662;</option>
                    <option value="EN">EN</option>
                    <option value="ES">ES</option>
                </select>
            </label>
            <input className="submitBtn" type="submit" value="Reset to Defaults"></input>
        </form>
    )
}