import React from "react";
import styled from "styled-components";
const imgaes = [
  "./images/thumb/thumbnail1.png",
  "./images/thumb/thumbnail2.png",
  "./images/thumb/thumbnail3.png",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F0f8baf270535128e10707ff64d0e5624c2c8bdca1223b33ed82910eb33c1f372",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FB6DDD6971C884F59B66E1785B65DC22D",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyMjAzMjFfOTgg%2FMDAxNjQ3ODI3OTI3NDk5.-geMSsRL7bi_YhVFK3jdGl2KWl2yY0loqgaxvJiRJtog.963wcPffX7fi-8VjUm-IxP4H0BfQs5UzivxXJqggXj4g.JPEG.chaj4094%2FSE-8ab31e85-2422-4cb2-9af1-b654a706a4d1.jpg%3Ftype%3Dw966",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2FD549F056DC4E4EF5B7A1904C7A798D97",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2FC7D703B40D414DDEAD796A72BB05E299",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F6122b1b2076a6e04e55e242ec4a1d663aba1be1af91f5e8709fc6741813c70e0",
  "https://pbs.twimg.com/media/Ff1Y9FtUoAI6NL1?format=jpg&name=medium",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F0ACAE18C0D6148668E32F2895E498FAC",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F23B7F6778DF24338A60A959F49A7C117",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F9E0CBFFD0F1F45C3B36F5B6BFC1D5A95",
  "https://cdn.dailysportshankook.co.kr/news/photo/202111/248448_247650_1255.jpg",
  "http://tnnews.co.kr/wp-content/uploads/2022/12/%EC%82%AC%EC%A7%841-%EC%86%8C%EB%85%B8%EC%8B%9C%EC%A6%8C-%ED%94%8C%EB%A0%88%EC%9D%B4-%EB%B9%84%EB%B0%9C%EB%94%94%ED%8C%8C%ED%81%AC-%ED%8C%9D%EC%97%85-%ED%98%84%EC%9E%A5.jpg",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2FD2502AAEB7B24861B813B3515FB9C198",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Fcfile74.uf.daum.net%2Fimage%2F2412BF4956D687FC308975",
  "https://i.pinimg.com/1200x/65/18/94/65189452ee48c64440374e11b7c56463.jpg",
  "https://mblogthumb-phinf.pstatic.net/MjAyMzA1MTdfNDAg/MDAxNjg0MzA5Njk1ODQ5.LHeTZSRd6ghm5iIlr-UD3wodUWskMzhq3CgV1UbnJ3Ig.Y6xbXej2tQZQmB0IASZS5AfC0jefqcnBUCsZNCvOKi8g.PNG.lg-bestshop/230504_LG%EC%A0%84%EC%9E%90_%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%83%B5_5%EC%9B%94_%EC%9D%B4%EB%8B%AC%EC%9D%98_%ED%96%89%EC%82%AC%EC%A0%901.png?type=w800",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyMTA3MDZfMTgx%2FMDAxNjI1NTAxNTc2NDUw.z75zxOsmVG9MX3_72-U7G9Rm2KKCpFxghb6PetYBMiAg.ra8v5WpgcjYKEq2fz8nT2ywFVFAKvRGYw0R8i9NVlMQg.JPEG.forever2131%2FIMG_9663.JPG%3Ftype%3Dw966",
  "https://skinnonews.com/wp-content/uploads/2023/07/KakaoTalk_20230717_142859318.jpg",
  "https://www.apparelnews.co.kr/upfiles/manage/202111/a820ab15026ca03f47c744e8255b5f20.jpg",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F9BFC58589BAA492DB623CCB1AC4A1E2C",
  "https://mp-seoul-image-production-s3.mangoplate.com/460278_1583286117144608.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyMzA2MjhfMjY5%2FMDAxNjg3OTMwOTAxMzQ1.9ZIcrwh6o2kMe27NVOWDoPbIvmJ-gkxgGroj-DdD6-Ag.5vcZvMtOCFhy0zH1v2WOpMDpl-TlotizaPKYfLl41p0g.JPEG.punctum05%2Foutput_4050104599.jpg%3Ftype%3Dw966",
  "https://mblogthumb-phinf.pstatic.net/MjAyMzA1MDVfMTM4/MDAxNjgzMjcwMTA1ODcx.6TiBKjwN8SaucOn_LwPVsRo_G-GdeYifWOEx68eKBBog.YiWYthACL44obm6_9s0jF3TlUZTQcyWJsdF_NkQF39cg.JPEG.rain930814/IMG_7376.JPG?type=w800",
  "https://inucoop.com/upload/mainImg/mainImg8.jpg",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F47E49C69BC6F44F2B12EB84CF56471AA",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F42AE48C0052A4D38A4457BAE85135B8C",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F7AE40E4C26FE456594744876DEC92235",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyMzA4MTRfMjU3%2FMDAxNjkxOTc5NTA4NzQ5.uFlvekYlo12QfXaZdVbjJqO7R0GU6OZo3fZOeHVRhNMg.4np9jNh94YOExvx4ebO0jd43izilMPgMlvQA4K1GNdkg.JPEG.vinnachoice%2FSE-37CF6B2D-C634-46AF-8EDC-CECB24DDAECB.jpg%3Ftype%3Dw966",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyMjA3MTdfMjE4%2FMDAxNjU4MDY4MDU3NDU0.eiUoSBxb-ZSaUqwdn08yVtQYio6c9fnpNbDFTRQFpHYg.UxZ9AilWifoxl7ZBIeXmCC1V3Uz7kBtGnwL8AbQXbcog.JPEG.zmfflxldp%2F1658068055716.jpg%3Ftype%3Dw773",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F95F796737FAC46F39103ACA9584B6130",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FBC10FD1CFFB3477BA85C9B766A840DF2",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F1ED3FED154FD4D17843EE518FB70059F",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F05C70613570148958BF42507BA77BAF4",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FDE26129309C84F879E2DB3E0AC77E7BA",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FFFA62748275A49B28C48287C7326D403",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FAC8CD15B7ACF4A3B8FEBA5C2033AE07B",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F2875A7FD61F84B22B7E44AF1D5468AF8",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F83F04CFB700649E98F0C2B009904E415",
  "https://scontent.cdninstagram.com/v/t39.30808-6/362250589_17869503476954993_2676327564092902260_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=CpR7gXxzsH8AX9JnaHn&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1NDM4Mjg4MzQ1MDc2NzU5Mw%3D%3D.2-ccb7-5&oh=00_AfBSzwUzlnMZDFd2KqXf0O9Kf8t5_Nf5EayC2dkj2QtVPQ&oe=64E1B892&_nc_sid=10d13b",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FCD96BBEA2B5243829A31305C012AA9EF",
  "http://www.policyfund.kr/news/photo/202206/5549_3529_1011.jpg",
  "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F635790CBC9AC47E090B19D66E7FEC6B9",
];
function StoreList({ data }) {
  const storeItems = data.map((store, index) => (
    <div key={index} className="card">
      <img src={imgaes[index]} alt="" />
      <p>{store.corporation}</p>
      <p>{store.location}</p>
    </div>
  ));

  const dividedStoreItems = [];
  for (let i = 0; i < storeItems.length; i += 3) {
    dividedStoreItems.push(storeItems.slice(i, i + 3));
  }

  return (
    <Wrapper>
      <h1>POP-UP STORE</h1>
      <hr />
      {dividedStoreItems.map((group, index) => (
        <section key={index}>{group}</section>
      ))}
    </Wrapper>
  );
}

export default StoreList;

const Wrapper = styled.div`
  display: inline-block;
  height: 10rem;
  h1 {
    font-size: 25px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  .wrapper {
    flex-grow: 1;
  }
  section {
    display: flex;
    justify-content: space-between;
    margin-top: 20px; /* 각 그룹 사이의 간격 조절 */
  }
  .post {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 10px;
    border-radius: 5px;
    border: 1.5px solid #a19f9f;
    background-color: white;
    font-size: large;
  }
  img {
    width: 400px; /* 이미지 크기 조절 */
    height: 400px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .card {
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  }
`;
