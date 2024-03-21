import React, { useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./ContactUs.css";
export const ContactUs = ({ colorCode }) => {
  const [hasFocusYourName, setFocusYourName] = useState(false);
  const [hasFocusEmail, setFocusEmail] = useState(false);
  const [hasFocusPhone, setFocusPhone] = useState(false);
  const [hasFocusSelect, setFocusSelect] = useState(false);
  const [hasFocusTextArea, setFocusTextArea] = useState(false);
  return (
    <div className="contact__us__card">
      <div>
        <div className="contact__us__inputs__card">
          <h2>Contact Us</h2>
          <span>Reach out to us for any enquiry</span>

          <div>
            <input
              type="text"
              placeholder="Name"
              style={{
                borderBottom: hasFocusYourName && `2px solid ${colorCode}`,
              }}
              onFocus={() => setFocusYourName(true)}
              onBlur={() => setFocusYourName(false)}
            />
            <input
              type="text"
              placeholder="Email"
              style={{
                borderBottom: hasFocusEmail && `2px solid ${colorCode}`,
              }}
              onFocus={() => setFocusEmail(true)}
              onBlur={() => setFocusEmail(false)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone"
              style={{
                borderBottom: hasFocusPhone && `2px solid ${colorCode}`,
              }}
              onFocus={() => setFocusPhone(true)}
              onBlur={() => setFocusPhone(false)}
            />
            <input
              type="text"
              placeholder="subject"
              style={{
                borderBottom: hasFocusSelect && `2px solid ${colorCode}`,
              }}
              onFocus={() => setFocusSelect(true)}
              onBlur={() => setFocusSelect(false)}
            />
          </div>
          <textarea
            placeholder="Message"
            id="textarea"
            cols="30"
            rows="10"
            style={{
              border: hasFocusTextArea && `2px solid ${colorCode}`,
            }}
            onFocus={() => setFocusTextArea(true)}
            onBlur={() => setFocusTextArea(false)}
          ></textarea>
          <button
            style={{
              background: colorCode,
            }}
          >
            Send Request
          </button>
        </div>
        <div className="contact__us__google__card">
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="400"
              frameborder="0"
              // scrolling="no"
              title="Credex Loans"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%207-1-621/259,%206th%20Floor,%20Sahithi%20Arcade,%20Beside%20S.R.Nagar%20Traffic%20Police%20Station,%20Hyderabad-%20500038+(Credex%20Loans)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Find Population on Map
              </a>
            </iframe>
          </div>
        </div>
      </div>
      <div className="contact__us__details">
        <div className="contact__address">
          <FaMapMarkedAlt
            style={{
              color: colorCode,
            }}
          />
          <div>
            <p className="contact__map__title">Location</p>
            <span>
              # 7-1-621/259, 6th Floor, Sahithi Arcade, Beside S.R.Nagar Traffic
              Police Station, Hyderabad- 500038
            </span>
          </div>
        </div>
        <div className="contact__address">
          <BsFillTelephoneInboundFill
            style={{
              color: colorCode,
            }}
          />
          <div>
            <p className="contact__map__title">Phone</p>
            <span>+91 8106511011</span>
            <span>+91 9030299864</span>
          </div>
        </div>
        <div className="contact__address">
          <MdEmail
            style={{
              color: colorCode,
            }}
          />
          <div>
            <p className="contact__map__title">Email</p>
            <span>md@credex.in</span>
            <span>ssaretail@gmail.com</span>
          </div>
        </div>
      </div>
      <h3 className="contact__other__title">Other Adress</h3>
      <div className="contact__other__address">
        <div className="contact__address">
          <FaMapMarkedAlt
            style={{
              color: colorCode,
            }}
          />
          <div>
            <p className="contact__map__title">Bangalore</p>
            <span>
              # 63, 1st Floor, Shop No.2, Kalkere Main Road, Silver Cloud
              Layout, Bangalore - 560043, Karnataka.
            </span>
          </div>
        </div>
        <div className="contact__address">
          <FaMapMarkedAlt
            style={{
              color: colorCode,
            }}
          />
          <div>
            <p className="contact__map__title">Visakhapatnam</p>
            <span>
              1-90-22/1, Plot No 58, LIG Sector-4, MVP Colony, Visakhapatnam,
              Andhra Pradesh-530017
            </span>
          </div>
        </div>
        <div className="contact__address">
          <FaMapMarkedAlt
            style={{
              color: colorCode,
            }}
          />
          <div>
            <p className="contact__map__title">Kurnool</p>
            <span>
              H.No-45-A1--1,Opp Kapil Chits(hyd) Pvt ltd, Srilakshmi High School
              Back side, Near LR English High School, Ashok Nagar,
              Kurnool-518001
            </span>
          </div>
        </div>
      </div>
      <br />
      <div className="contact__other__address">
        <div className="contact__address">
          <FaMapMarkedAlt
            style={{
              color: colorCode,
            }}
          />
          <div>
            <p className="contact__map__title">Vijayawada</p>
            <span>
              #40-9/1-12 Lohia Towers, 4th floor, Opp to Nirmala Convent, Near
              benz circle , Patamata, Vijayawada-520 010.
            </span>
          </div>
        </div>
        <div className="contact__address">
          <FaMapMarkedAlt
            style={{
              color: colorCode,
            }}
          />
          <div>
            <p className="contact__map__title">Kakinada</p>
            <span>
              64-9-2B, Near Pailamma Talli Temple, Pratap Nagar, Kakinada,
              Andhra Pradesh-533004
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
