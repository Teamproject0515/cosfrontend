import React, { useState } from 'react';
import AxiosApiService from "../../AxiosApiService";
import DaumPostcode from 'react-daum-postcode';
import '../css/signUp.css';
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../../Maincomponent/Banner';
import Footer from '../../Maincomponent/Footer';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import SignUpBox from './SignUpBox';

function SignUp(props) {
    const [user_email, setUser_email] = useState('');            //메일
    const [user_password, setUser_password] = useState('');      //패스워드 
    const [user_passwordChk, setUser_passwordChk] = useState('');//패스워드확인 
    const [passwordError, setPasswordError] = useState(false);   //실시간으로 패스워드 확인
    const [user_name, setUser_name] = useState('');              //이름
    const [user_birthday, setUser_birthday] = useState('');      //생년월일
    const [user_gender, setUser_gender] = useState('남자');        //성별
    const [user_phone, setUser_phone] = useState('');            //핸드폰
    const [post_code, setPost_code] = useState();                  //우편번호
    const [address, setAddress] = useState('');                  //주소
    const [detail_address, setDetail_address] = useState('');      //상세주소
    const [isOpenPost, setIsOpenPost] = useState(false);        //api토글
    const [userCheck, setUserCheck] = useState(0); //백엔드에서 중복이메일인지 값을 받아옴
    const [emailCheck, setEmailCheck] = useState(false); //백엔드에서 중복이메일인지 값을 받아옴
    const [openDetailAddress, setOpenDetailAddress] = useState(false);

    const toggleNav = (e) => {
        e.preventDefault();
        //사용자가 클릭시 falue면 true로 true면 falue로 토글
        setIsOpenPost(isOpenPost => !isOpenPost);
        console.log(isOpenPost);
    }

    function checkEmail(e) {  //이메일 중복체크
        e.preventDefault();
        if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(user_email)) {
            AxiosApiService.getUserEmail(user_email)
                .then(res => {
                    let userEmail = res.data;//백엔드에서 값을 받아 변수에 저장 
                    setUserCheck(userEmail);  //받아온 값을 useState에 저장
                    if (userCheck > 0) {          //이메일이 있으면 0보다 큰 숫자가 들어옴
                        alert('이메일이 이미 존재합니다')
                    } else {
                        alert('사용 가능한 이메일 입니다.')
                        setEmailCheck(true);
                    }
                })
                .catch(err => {
                    console.log('getUserEmail() 에러', err);
                });
        } else {
            alert('이메일형식이 올바르지 않습니다.')
        }

    }

    //사용자가 submit시 실행되는 이벤트
    function saveUser(e) {
        e.preventDefault();

        //빈칸확인
        if (!(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(user_email)) || user_email === '' || emailCheck === false) {
            alert('이메일를 체크해주세요');
            return false;
        }
        if (!(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/.test(user_password)) || user_password === '') {
            alert('비밀번호가 비어있거나 형태가 맞지않습니다.');
            return false;
        }
        if (user_passwordChk === '') {
            alert('비밀번호가 일치하는지 확인해주세요');
            return false;
        }
        if (user_name === '') {
            alert('이름을 확인해주세요');
            return false;
        }
        if (!(/^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/.test(user_birthday)) || user_birthday === '') {
            alert('생년월일을 확인해주세요');
            return false;
        }
        if (!(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/.test(user_phone)) || user_phone === '') {
            alert('핸드폰번호를 확인해주세요');
            return false;
        }
        if (post_code === '') {
            alert('우편번호를 확인해주세요');
            return false;
        }
        if (address === '') {
            alert('주소를 확인해주세요');
            return false;
        }
        if(detail_address===''){
            alert('상세주소를 확인해주세요');
            return false;
        }
       
        //사용자가 입력한 값들을 객체에 담음
        let user = {
            user_email: user_email,
            user_password: user_password,
            user_name: user_name,
            user_birthday: user_birthday,
            user_gender: user_gender,
            user_phone: user_phone,
            post_code: post_code,
            address: address,
            detail_address: detail_address
        }
        console.log(user);
        //객체에 담은 값들을 백엔드로 전송 axios로
        AxiosApiService.insertUser(user)
            .then(res => {
                props.history.push('/'); //입력성공시 이동
            })
            .catch(err => {
                props.history.push('/signUpError');
                console.log('saveUser() 에러', err);
            });

    }

    //사용자가 입력한 값들을 실시간으로 저장
    function onEmail(e) {
        setUser_email(e.currentTarget.value)
    }
    function onPassword(e) {
        setUser_password(e.currentTarget.value)
    }
    function onPasswordChk(e) {
        //사용자가 입력한 비밀번호가 비밀번호 확인과 같은지 확인
        setPasswordError(e.target.value !== user_password);
        setUser_passwordChk(e.currentTarget.value);
    }
    function onName(e) {
        setUser_name(e.currentTarget.value)
    }
    function onGender(e) {
        setUser_gender(e.currentTarget.value)
    }
    function onBirthday(e) {
        setUser_birthday(e.currentTarget.value)
    }
    function onPhone(e) {
        setUser_phone(e.currentTarget.value)
    }
    function onPostcode(e) {
        setPost_code(e.currentTarget.value)
    }
    function onAddress(e) {
        setAddress(e.currentTarget.value)
    }

    function onDetailAddress(e) {
        setDetail_address(e.currentTarget.value)
    }

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(5, 5, 5),
            borderRadius: '10px'
        },
    }));

    const classes = useStyles();

    const handleClose = (e) => {
        setIsOpenPost(false);
        setOpenDetailAddress(false);
    };

    //카카오 주소 api
    function seachAddress(e) {
        const onCompletePost = (data) => {
            let fullAddress = data.address;
            let zonecode = data.zonecode;
            let extraAddress = '';

            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
                }
                fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
            }

            setPost_code(zonecode);
            setAddress(fullAddress);
            setIsOpenPost(false);
        }

        const postCodeStyle = makeStyles((theme) => ({
            paper: {
                position: 'absolute',
                width: 400,
                backgroundColor: theme.palette.background.paper,
                border: '2px solid #000',
                boxShadow: theme.shadows[5],
                padding: theme.spacing(2, 4, 3),
            },
        }));
        return (
            <Modal
                className={classes.modal}
                open={isOpenPost}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isOpenPost}>
                    <div className={classes.paper} style={{ width: '640px' }}>
                        {isOpenPost && <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />}
                    </div>
                </Fade>
            </Modal>
        );
    }


    return (
        <>
            <Banner />
            <SignUpBox
                checkEmail={checkEmail}
                onEmail={onEmail}
                onPassword={onPassword}
                onPasswordChk={onPasswordChk}
                onGender={onGender}
                onName={onName}
                onBirthday={onBirthday}
                onPhone={onPhone}
                toggleNav={toggleNav}
                onPostcode={onPostcode}
                onDetailAddress={onDetailAddress}
                saveUser={saveUser}
                passwordError={passwordError}
                seachAddress={seachAddress}
                onAddress={onAddress}
                onDetailAddress={onDetailAddress}
                isOpenPost={isOpenPost}
                post_code={post_code}
                address={address}
            />
        </>
    )
}

export default SignUp;
