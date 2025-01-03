import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import Flag from 'react-world-flags';
import './SwitchLanguage.css';

const { Option } = Select;

const SwitchLanguage = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (value) => {
        i18n.changeLanguage(value);
        localStorage.setItem("lang", value);
    };

    return (
        <div className="switch_language_body">
            <Select
                defaultValue={i18n.language}
                onChange={handleLanguageChange}
                style={{ width: 120 }}
                value={i18n.language}
                dropdownClassName="language-dropdown"
            >
                <Option value="kh">
                    <div className="language-option">
                        <Flag code="kh" className="flag-icon" /> KH
                    </div>
                </Option>
                <Option value="en">
                    <div className="language-option">
                        <Flag code="us" className="flag-icon" /> EN
                    </div>
                </Option>
                <Option value="cn">
                    <div className="language-option">
                        <Flag code="cn" className="flag-icon" /> CN
                    </div>
                </Option>
            </Select>
        </div>
    );
};

export default SwitchLanguage;
