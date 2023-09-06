import styled from "styled-components";
import ParallaxBanner from "../components/ParallaxBanner";

function About() {
  return (
    <div>
      <ParallaxBanner />
      <Layout>
        <div></div>
      </Layout>
      <H1>CONTACT US</H1>
      <Bottom>
        <div>
          <h2>*개인정보 수집 및 이용안내</h2>
          <p>
            1. 수집 개인정보 항목 : 신청자명, 이메일주소 <hr />
            2. 개인정보 수집 및 이용목적 : 문의 신청에 따른 회신 목적 <hr />
            3. 개인정보 보유 및 이용기간 : 문의사항 처리 완료 후 1개월간 보관 후
            파기
            <hr />
            개인정보 수집동의를 거부할 수 있으며, 거부하는 경우 문의 신청이
            제한됩니다.
          </p>
        </div>
        <div>
          <p>
            Email : rmsoft@gmail.com <hr />
            Tel(Fax) : 02-1234-5678 <hr />
            서울 서초구 서초중앙로 63-6 <hr />* 문의 후 24시간 내에 답변드리도록
            하겠습니다.
          </p>
        </div>
      </Bottom>
    </div>
  );
}

export default About;

const H1 = styled.h1`
  display: flex;
  width: 333px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  transform: translateX(30%);
  align-items: center;

  color: white;
  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -2.5px;

  margin-top: 400px;
`;

const Layout = styled.div`
  width: 1200px;
  height: 670px;
`;

const Bottom = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 60px 0px 0px 0px;
  transform: translateX(10%);
  align-items: center;

  h2 {
    display: flex;
    width: 440px;
    height: 20px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: white;
    font-family: SansSerif;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    display: flex;
    width: 440px;
    height: 120px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: white;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  hr {
    border: none;
    height: 10px;
  }
`;
