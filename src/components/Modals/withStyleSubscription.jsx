import styled from 'styled-components';

export default (component) => styled(component)`
      position: absolute;
        width: 600px;
        min-width: 300px;
        max-width: 586px;
        padding: 60px 25px 25px 25px;
        left: 50%;   
        top: 200px;
        transform: translate(-50%, -50%);
        background-color: #fff;
        z-index: 10;
    
    .header-text {
      text-align: center;
      font-size: 14px;
      overflow-wrap: break-word;
      font-weight: 500;
      color: rgb(72, 72, 72)
    }
    .header-text .link {
      margin: 0 3px;
      color: #008489
    }
    
    .header-text .link:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    
    .separator {
      display: inline-block;  
      width: 100%;
      margin-top: 15px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
      text-align: center;
      color: rgb(72,72,72)
    }
    
    .separator::before {
      display: inline-block;
      content: '';
      vertical-align: middle;
      height: 1px;
      margin-right: 15px;
      width: 43%;
      background: #e4e4e4;
    }
    
    .separator::after {
      display: inline-block;
      content: '';
      vertical-align: middle;
      height: 1px;
      margin-left: 15px;
      width: 43%;
      background: #e4e4e4;
    }
    
    .text-box {
      position: relative;
      width: 100%;
      height: 48px;
      margin-top: 15px;
    }
    
    .text-input:focus {
        border-color: #6c6c6c;
    }
    
    .text-input {
      width: 100%;
      padding: 13px;
      font-size: 14px;
      color: #484863;
      font-weight: 700;
      border: 1px solid #F4F4F4;
      border-radius: 4px;
      transition: all .3s;
    }
    
    .text-input::placeholder {
      font-weight: 400;
      font-size: 14px;
      color: #6d6d8d;
      opacity: 1; /* Firefox */
    }
    
    .icon-box {
      position: absolute;
      display: inline-block;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      padding: 5px;
      margin-left: 15px;
      vertical-align: middle;
    }
    
    .email {
      background: url("/img/email.svg") center center / 20px 20px no-repeat;
    }
    
    .password {
      cursor: pointer;
      background: url("/img/locked.svg") center center / 20px 20px no-repeat;
    }
    
    .user {
      background: url("/img/user.svg") center center / 20px 20px no-repeat;
    }
    
    .down-arrow {
      background: url("/img/down-arrow.svg") center center / 18px 18px no-repeat;
    }
    
    select.text-input {
    -webkit-appearance: none;
    }
    .close-icon {
      display: inline-block;
      position: absolute;
      top: 25px;
      left: 25px;
      width: 15px;
      height: 15px;
      cursor: pointer;
      background: url("/img/cancel.svg") center center / 15px 15px no-repeat;
    }
    .btn {
      display: block;
      width: 100%;
      height: 46px;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
      padding: auto 1.1em;
      border-style: none;
      border-radius: 4px;
      margin-top: 10px;
    }
    
    .birth-date-box{
      width: 100%;
      padding: 10px 0;
      overflow: hidden;
      font-weight: 300;
      color: rgb(72,72,72);
    }
    
     .birth-date-box p {
        padding-top: 15px;
        font-size: 14px;
    }
    
    .birth-date-box .text-box {
      display: inline-block;
      width: calc(100% / 3);
    }
    
    .birth-date-box .text-box:nth-child(2n){
      margin: 0 10px;
      width: calc((100% / 3 ) - 20px);
    }
    
    .birth-date-header h1 {
      font-weight: 500;
      font-size: 16px;
    }
    
    
    .btn:hover  {
      cursor: pointer;
    }
    
    .facebook {
      color: #fff;
      background: url("//img/facebook-white.svg") 20% center / 18px 18px no-repeat, #4568B2;
    }
    
    .google {
      color: #484C5F;
      background: url("//img/google.svg") 20% center / 18px 18px no-repeat;
      border:  2px solid #484C5F ;
    }
    
    .pink {
      color: #fff;
      background: #CA1F86;
      transition: background-color .1s;
    }
    
    .btn.pink:active {
        background: #CA1F86;
    }
    
    
    .promotion {
      padding: 20px 0;
      overflow: hidden;
      font-size: 15px;
      font-weight: 300;
      border-bottom: 1px solid #e4e4e4;
      color: rgb(72,72,72);
    }
    
    .promotion input {
      float: left;
      display: inline-block;
      margin-right: 5px;
    }
    
    .promotion p {
      float: left;
      display: inline-block;
      width: calc(100% - 25px);
      overflow-wrap: break-word;
    }
    
    .subscription {
      padding: 25px 0;
      text-align: center;
      font-size: 17px;
      font-weight: 300;
      color: rgb(72, 72, 72);
    }
    .subscription > span {
      display: inline-block;
      margin-left: 15px;
      font-weight: 500;
      color: #008489;
    }
    
    .clear-fix {
      clear: both;
    }
    
    .subscription > span:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    
    
    @media only screen and (max-width: 860px) {
      .separator {
        display: none;
      }
      
      .facebook {
          color: #fff;
          background: #4568B2;
      }
      .google {
          color: #484C5F;
          background: #fff;
          border:  2px solid #484C5F ;
      }
    }
`;
