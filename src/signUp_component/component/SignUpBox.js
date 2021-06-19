import React from 'react'

function SignUpBox({ checkEmail, onEmail, onPassword, onPasswordChk, onGender, seachAddress,
    onName, onBirthday, onPhone, toggleNav, onPostcode, onDetailAddress, saveUser, passwordError
    , onAddress, isOpenPost,post_code,address }) {
    return (
        <>
            <div className="signUp-wapper">
                <div className="signUp-title">
                    <span className="sign">Sign Up</span>
                </div>

                <form className="signUp-form">
                    <div className="signUp-inputBox">
                        <div className="signUp-inputRow">
                            <label className="signUp-label">Email</label>
                            <button className="signUp-butten" onClick={checkEmail}>이메일 체크</button>
                        </div>
                        <input className="signUp-input" type="email" placeholder="이메일"
                            id="email" name="user_email" onChange={onEmail} />

                    </div>

                    <div className="signUp-inputBox">
                        <label className="signUp-label">Password</label>
                        <input className="signUp-input" type="password" placeholder="8~10자리 이내의 숫자와 문자포함 형태"
                            name="user_password" onChange={onPassword} />
                    </div>

                    <div className="signUp-inputBox">
                        <label className="signUp-label">Password</label>
                        <input className="signUp-input" type="password" placeholder="비밀번호확인"
                            onChange={onPasswordChk} />
                        {passwordError && <span style={{ color: 'red', fontSize: '12px' }}>
                            비밀번호가 일치하지 않습니다.
                        </span>}
                    </div>

                    <div className="signUp-inputBox">
                        <label className="signUp-label">성별</label>
                        <select className="signUp-select" onChange={onGender}>
                            <option value='남자'> 남자</option>
                            <option value='여자'> 여자</option>
                        </select>
                    </div>

                    <div className="signUp-inputBox">
                        <label className="signUp-label">Name</label>
                        <input className="signUp-input" type="text" placeholder="이름"
                            name="user_name" onChange={onName} />
                    </div>

                    <div className="signUp-inputBox">
                        <label className="signUp-label">Birthday</label>
                        <input className="signUp-input" type="text" placeholder="생년월일 (예)19950804"
                            name="user_birthday" onChange={onBirthday} />
                    </div>

                    <div className="signUp-inputBox">
                        <label className="signUp-label">Phone</label>
                        <input className="signUp-input" placeholder="핸드폰 번호 (예)01011112222"
                            name="user_phone" onChange={onPhone} />
                    </div>

                    <div className="signUp-inputBox">
                        <div className="signUp-inputRow">
                            <label className="signUp-label">Postcode</label>
                            <button className="signUp-butten" onClick={toggleNav} value="우편번호 찾기">우편번호 찾기</button>
                        </div>
                        {isOpenPost && seachAddress()}
                        <input className="signUp-input" type="text" id="postcode" placeholder="우편번호"
                            name="postcode" value={post_code} onChange={onPostcode} />
                    </div>

                    <div className="signUp-inputBox">
                        <label className="signUp-label">Address</label>
                        <input className="signUp-input" type="text" id="address" placeholder="주소"
                            name="roadaddress" value={address} onChange={onAddress} />
                    </div>

                    <div className="signUp-inputBox">
                        <label className="signUp-label">DetailAddress</label>
                        <input className="signUp-input" type="text" id="detailAddress" placeholder="상세주소"
                            name="detailaddress" onChange={onDetailAddress} />
                    </div>
                    <button className="signUp-save" onClick={saveUser}>Save</button>
                </form>
            </div>
        </>
    )
}

export default SignUpBox
