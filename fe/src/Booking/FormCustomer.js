import React, { useState } from "react";

const FormCustomer = (props) => {
  const [user, setuser] = useState(() => ({
    nickname: "",
    name: "",
    surname: "",
    date_birth: 0,
    month_birth: 0,
    year_birth: 0,
    nationality: "",
  }));

  const handleBlur = () => {
    if (
      user.nickname?.length <= 0 ||
      user.name?.length <= 0 ||
      user.surname?.length <= 0 ||
      user.date_birth <= 0 ||
      user.month_birth <= 0 ||
      user.year_birth <= 0 ||
      user.nationality?.length <= 0
    ) {
      props.setaccept((prev) => false);
    } else {
      props.setaccept((prev) => true);
    }
  };
  const nationalityOptions = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Côte d'Ivoire",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo (Congo-Kinshasa)",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    'Eswatini (fmr. "Swaziland")',
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia (formerly Macedonia)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1024,
        background: "#f2f0f5",
        padding: 10,
        borderRadius: 8,
        boxSizing: "border-box",
        margin: "10px 0",
        backgroundColor: "#fff",
      }}
    >
      <div className="fksopkopwoqwa" style={{ width: 632, height: "auto" }}>
        <div style={{ fontWeight: 600 }}>{props.title}</div>
      </div>
      <br />

      <div style={{ color: "#ffa500", fontWeight: 600, fontSize: 14 }}>
        Tên không dấu (Đệm Tên Họ, VD: Thi Ngoc Anh Nguyen)
      </div>
      <br />
      <div>
        <div
          style={{
            color: "#000",
            fontWeight: 600,
            fontSize: 14,
            marginBottom: 8,
          }}
        >
          Danh xưng
        </div>
        <div>
          <input
            onBlur={() => handleBlur()}
            onChange={(e) =>
              setuser((prev) => ({ ...prev, nickname: e.target.value }))
            }
            type="text"
            style={{
              width: 198,
              height: 40,
              borderRadius: 8,
              border: "1px solid #dfe1e2",
              paddingLeft: 10
            }}
          />
          {user.nickname?.length <= 0 && (
            <div style={{ color: "red", fontSize: 14 }}>Enter nick name</div>
          )}
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "space-between",
          background: "#fff",
        }}
      >
        <div style={{ width: "48%" }}>
          <div
            style={{
              color: "#000",
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            Họ (vd: Nguyen)
          </div>
          <div style={{ width: "100%" }}>
            <input
              onBlur={() => handleBlur()}
              onChange={(e) =>
                setuser((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              style={{
                width: "100%",
                height: 40,
                borderRadius: 8,
                border: "1px solid #dfe1e2",
                paddingLeft: 10
              }}
            />
            {user.name?.length <= 0 && (
              <div style={{ color: "red", fontSize: 14 }}>Enter surname</div>
            )}
            <div style={{ fontSize: 12, color: "#3a3b3c" }}>
              như trên CMND (không dấu)
            </div>
          </div>
        </div>
        <div style={{ width: "48%" }}>
          <div
            style={{
              color: "#000",
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            Tên đệm và tên (vd: Thi Ngoc Anh)
          </div>
          <div style={{ width: "100%" }}>
            <input
              onBlur={() => handleBlur()}
              onChange={(e) =>
                setuser((prev) => ({ ...prev, surname: e.target.value }))
              }
              type="text"
              style={{
                width: "100%",
                height: 40,
                borderRadius: 8,
                border: "1px solid #dfe1e2",
                paddingLeft: 10
              }}
            />
            {user.surname?.length <= 0 && (
              <div style={{ color: "red", fontSize: 14 }}>Enter name</div>
            )}
            <div style={{ fontSize: 12, color: "#3a3b3c" }}>
              như trên CMND (không dấu)
            </div>
          </div>
        </div>
        <div style={{ width: "48%" }}>
          <div
            style={{
              color: "#000",
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            Ngày sinh
          </div>
          <div style={{ width: "100%" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
                gap: 10,
              }}
            >
              <div style={{ flex: "1 1 0" }}>
                <select
                  onBlur={() => handleBlur()}
                  onChange={(e) =>
                    setuser((prev) => ({ ...prev, date_birth: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    height: 40,
                    borderRadius: 8,
                    border: "1px solid #dfe1e2",
                  }}
                >
                  <option value="">Chọn ngày sinh</option>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>

                {user.date_birth <= 0 && (
                  <div
                    style={{ color: "red", fontSize: 14, whiteSpace: "nowrap" }}
                  >
                    Enter date of birth
                  </div>
                )}
              </div>
              <div style={{ flex: "2 1 0" }}>
              <select
                  onBlur={() => handleBlur()}
                  onChange={(e) =>
                    setuser((prev) => ({ ...prev, month_birth: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    height: 40,
                    borderRadius: 8,
                    border: "1px solid #dfe1e2",
                  }}
                >
                  <option value="">Chọn tháng sinh</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                {user.month_birth <= 0 && (
                  <div
                    style={{ color: "red", fontSize: 14, whiteSpace: "nowrap" }}
                  >
                    Enter month of birth
                  </div>
                )}
              </div>
              <div style={{ flex: "1 1 0" }}>
              <select
                  onBlur={() => handleBlur()}
                  onChange={(e) =>
                    setuser((prev) => ({ ...prev, year_birth: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    height: 40,
                    borderRadius: 8,
                    border: "1px solid #dfe1e2",
                  }}
                >
                  <option value="">Chọn năm sinh</option>
                  {Array.from({ length: 100 }, (_, i) => i + 1).map((year) => (
                    <option key={year} value={parseInt(year) + 1923}>
                      {parseInt(year) + 1923}
                    </option>
                  ))}
                </select>
                {user.year_birth <= 0 && (
                  <div
                    style={{ color: "red", fontSize: 14, whiteSpace: "nowrap" }}
                  >
                    Enter year of birth
                  </div>
                )}
              </div>
            </div>
            <div style={{ fontSize: 12, color: "#3a3b3c" }}>
              Hành khách người lớn (trên 12 tuổi)
            </div>
          </div>
        </div>
        <div style={{ width: "48%" }}>
          <div
            style={{
              color: "#000",
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            Quốc tịch
          </div>
          <div style={{ width: "100%" }}>
          <select
              onBlur={() => handleBlur()}
              onChange={(e) => setuser((prev) => ({ ...prev, nationality: e.target.value }))}
              value={user.nationality}
              style={{ width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2" }}
            >
              <option value="">Chọn quốc tịch</option>
              {nationalityOptions.map((nationality) => (
                <option key={nationality} value={nationality}>
                  {nationality}
                </option>
              ))}
            </select>
            {user.nationality?.length <= 0 && <div style={{ color: "red", fontSize: 14 }}>Chọn quốc tịch</div>}
            <div style={{ fontSize: 12, color: "#3a3b3c" }}>
              Ví dụ: Việt Nam
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCustomer;
