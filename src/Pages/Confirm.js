import { withRouter } from 'react-router-dom';
import { data } from '../Constants'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


function Catalogue(props) {
    const getData = data.find(i => i.name === props.match.params.productId)
    const history = useHistory();

    const handleRedeem = () => {
        fetch('http://localhost:4995/v4/partner/coupons', {
            method: 'post',
            headers: {
        "x-ecom-app-id": "signifyd",
              "Content-type": "application/json",
              "x-ecom-secret":"ZdAdXPQ0dxDHpsSgP77B1QnUeLUvuHYGLWHKDNT/TLKRVnj+jop9rviaBYbxEsjGNVhh4HuvkWfmV/UXvofKYQHlWcllX6ZVe1rNgzpHnRVgAmASpOAfsXMh4VYMCDQ1QvXGhgJTYwWBbQ1x7Qolf7oKLPs4c5fCNjvNp10TiF8="
            },
            body: {
                "offer_id": "1608138332710",
                "no_of_codes": 1,
                "user_id": "seukshipping2019@gmail.com",
                "coupon_start_date": "2020-12-16T04:00:00Z",
                "coupon_end_date": "2021-12-01T04:00:00Z",
                "discount_description": [
                {
                "type": "Rebate",
                "value": "500"
                }
                ]
               }
          })
            .then(
                function (response) {
                    if (response.status !== 200) {
                        history.push('ok')
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        console.log(data);
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }
    console.log(props.match.params.productId)
    return (
        <div style={{
            width: '80%',
            margin: 'auto',
            padding: 30,
        }}>
            <img src={getData.image}></img>
            <div style={{
                display: "inline-block",
                top: "30%",
                position: 'absolute'
            }}>
                <span>
                    {getData.description}
                </span>
                <span style={{ color: 'red', display: 'block' }}>
                    {getData.price}
                </span>
                <Button variant="contained" color="primary" onClick={() => handleRedeem()}>
                    Redeem
      </Button>
            </div>

        </div>
    );
}

export default withRouter(Catalogue);
