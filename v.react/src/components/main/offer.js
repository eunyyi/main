import styled from "@emotion/styled";

export const H1 = styled.h1`
    font-size: 45px;
    font-weight: 400;
    margin-bottom: 25px;
    `;

export const H4 = styled.h4`
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 100px;
    `;
    
//sec.offer
export const Offers = styled.section`
    width: 100%;
    margin: 0 auto;
    margin-top: 220px;
    color: #1A1A1A;
    text-align: center;
`;

export const OffersUl = styled.ul`
    width: 1297px;
    margin: 0 auto;
    height: auto;
    flex-wrap: wrap;
    justify-content:space-between;
`;

export const OffersLi = styled.li`
    width: 419px;
    height: 279px;
    margin-bottom: 20px;
    /* margin-right: 10px; */

    :nth-child(1) {
        background: url('/assets/offers/01.jpg') no-repeat center / cover;
    }
    :nth-child(2) {
        background: url('/assets/offers/02.jpg') no-repeat center / cover;
    }
    :nth-child(3) {
        background: url('/assets/offers/03.jpg') no-repeat center / cover;
    }
    :nth-child(4) {
        background: url('/assets/offers/04.jpg') no-repeat center / cover;
    }
    :nth-child(5) {
        background: url('/assets/offers/05.jpg') no-repeat center / cover;
    }
    :nth-child(6) {
        background: url('/assets/offers/06.jpg') no-repeat center / cover;
    }

    :nth-child(1):hover {
        background: url('/assets/offers/after1.png') no-repeat center / cover;
    }
    :nth-child(2):hover {
        background: url('/assets/offers/after2.png') no-repeat center / cover;
    }
    :nth-child(3):hover {
        background: url('/assets/offers/after3.png') no-repeat center / cover;
    }
    :nth-child(4):hover {
        background: url('/assets/offers/after4.png') no-repeat center / cover;
    }
    :nth-child(5):hover {
        background: url('/assets/offers/after5.png') no-repeat center / cover;
    }
    :nth-child(6):hover {
        background: url('/assets/offers/after6.png') no-repeat center / cover;
    }
`;

export const OfferCons = () => {
    return(
        <Offers>
          <H1 className="serif">Hotel Offers</H1>
          <H4 className="serif">
            최상의 가치와 특별한 라이프 스타일을 경험할 수 있도록 다양한 오퍼를
            제공하고 있습니다.
          </H4>
          <div>
            <OffersUl className="row">
              <OffersLi />
              <OffersLi />
              <OffersLi />
              <OffersLi />
              <OffersLi />
              <OffersLi />
            </OffersUl>
          </div>
        </Offers>
    )
};