<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  * {
    font-family: "Poppins", sans-serif;
  }

  @media screen and (max-width: 768px) {
    .payrun_main_container {
      width: 90% !important;
    }

    .paryrun_logo {
      max-width: 120px !important;
      height: 25px !important;
      padding-top: 0 !important;
    }

    .svg-img {
      height: 100px !important;
    }

    .header {
      padding-top: 10px !important;
      padding-left: 20px !important;
      height: max-content !important;
    }

    .header h1 {
      line-height: 30px !important;
      font-size: 16px !important;
      font-weight: 500 !important;
      padding-top: 0px !important;
    }

    .content {
      padding: 20px 5% !important;
    }
  }
</style>
<div style="padding: 20px 0; background: #f3f3f3; margin: 0">
  <div class="payrun_main_container" style="width: 60%; margin: 0 auto">
    <table class="container" cellpadding="0" cellspacing="0" style="
            background: white;
            padding: 0;
            width: 100%;
            height: max-content;
            font-size: 12px;
          ">
      {{#if (eq no_of_failed_payments 0)}}
          <tr>
            <td class="svg-img" style="
                height: 120px;
                background-image: url('https://payrun-local-public.imgix.net/payrun_logo/email_banner.png?h=500&w=1200');
                background-repeat: no-repeat;
                background-size: cover;
              ">
              <div class="header" style="
                  line-height: 20px;
                  color: white;
                  padding-left: 30px;
                  height: 100%;
                ">
                <img src="https://payrun-local-public.imgix.net/payrun_logo/logo.png" class="paryrun_logo" alt="Payrun Logo" style="max-width: 130px; height: 35px; padding-top: 20px" />
                <h1 style="
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 20px;
                    color: white;
                    margin: 0;
                    padding-top: 5px;
                  ">
                  Important: Update Your Payrun Payment
                </h1>
              </div>
            </td>
          </tr>
          <tr>
            <td class="content" style="padding: 40px 5%">
              <p>
                Hello
                <span class="bold_text" style="font-weight: 600; line-height: 20px">
                  {{ customerName }},</span>
              </p>
              <div class="email_body">
                <p>
                  We regret to inform you that the recent payment for your
                  Payrun Payment has failed.
                </p>
                <p>
                As a valued subscriber to Payrun, we appreciate your trust in our software. However, we noticed that your subscription payment is overdue.
                </p>
                <p class="double_margin">
                  <span class="red_bold_text">Reason for Payment Failure :</span>
                  {{ reason }}
                </p>
                <p>
                  Thank you for choosing Payrun. We look forward to continuing
                  to serve you.
                </p>
                <p>
                  If you require any assistance or have questions regarding the
                  payment failure or reactivation process, please don't hesitate
                  to contact our support team at support@payrun.app. We're here
                  to help you every step of the way.
                </p>
              </div>
              <div class="email_footer" style="margin-top: 24px">
                <p>Regards,</p>
                <p>Payrun</p>
                <p class="blue_text" style="color: #2c67ff">
                  support@payrun.app
                </p>
                <p>
                  <a href="{{ url }}" style="text-decoration: none; color: #2c67ff">{{url}}</a>
                </p>
              </div>
            </td>
          </tr>
      {{else if (eq no_of_failed_payments 1)}}
          <tr>
            <td class="svg-img" style="
                height: 120px;
                background-image: url('https://payrun-local-public.imgix.net/payrun_logo/email_banner.png?h=500&w=1200');
                background-repeat: no-repeat;
                background-size: cover;
              ">
              <div class="header" style="
                  line-height: 20px;
                  color: white;
                  padding-left: 30px;
                  height: 100%;
                ">
                <img src="https://payrun-local-public.imgix.net/payrun_logo/logo.png" class="paryrun_logo" alt="Payrun Logo" style="max-width: 130px; height: 35px; padding-top: 20px" />
                <h1 style="
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 20px;
                    color: white;
                    margin: 0;
                    padding-top: 5px;
                  ">
                  Important: Your Payrun Subscription Payment is Overdue
                </h1>
              </div>
            </td>
          </tr>
          <tr>
            <td class="content" style="padding: 40px 5%">
              <p>
                Hello
                <span class="bold_text" style="font-weight: 600; line-height: 20px">
                  {{ customerName }},</span>
              </p>
              <div class="email_body">
                <p>
                  We regret to inform you that the recent payment for your<span class="bold_text">
                    Payrun Payment has failed .</span>
                </p>
                <p>
                  This is a friendly reminder that your Payrun subscription
                  payment is still outstanding. We understand that sometimes
                  things slip through the cracks, but we kindly request you to
                  settle the payment promptly.
                </p>
                <p class="double_margin">
                  <span class="red_bold_text">Reason for Payment Failure :</span>
                  {{ reason }}
                </p>
                <p>
                  If you’ve already made the payment, please disregard this
                  email. Otherwise, follow these steps:
                </p>
                <div>
                  <ol>
                    <li>Log in to your Payrun account.</li>
                    <li>
                      Navigate to the billing section and update your payment
                      details.
                    </li>
                  </ol>
                </div>
                <p class="double_margin">
                  If you require any assistance or have questions regarding the
                  payment failure or reactivation process, please don't hesitate
                  to contact our support team at
                  <a href="{{ url }}">support@pyrun.app</a> . We're here to help
                  you every step of the way.
                </p>
              </div>
              <div class="email_footer" style="margin-top: 24px">
                <p>Regards,</p>
                <p>Payrun</p>
                <p class="blue_text" style="color: #2c67ff">
                  support@payrun.app
                </p>
                <p>
                  <a href="{{url}}" style="text-decoration: none; color: #2c67ff">{{url}}</a>
                </p>
              </div>
            </td>
          </tr>
      {{else if (eq no_of_failed_payments 2)}}
          <tr>
            <td class="svg-img" style="
                height: 120px;
                background-image: url('https://payrun-local-public.imgix.net/payrun_logo/email_banner.png?h=500&w=1200');
                background-repeat: no-repeat;
                background-size: cover;
              ">
              <div class="header" style="
                  line-height: 20px;
                  color: white;
                  padding-left: 30px;
                  height: 100%;
                ">
                <img src="https://payrun-local-public.imgix.net/payrun_logo/logo.png" class="paryrun_logo" alt="Payrun Logo" style="max-width: 130px; height: 35px; padding-top: 20px" />
                <h1 style="
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 20px;
                    color: white;
                    margin: 0;
                    padding-top: 5px;
                  ">
                 Urgent: Payrun Subscription at Risk of Suspension
                </h1>
              </div>
            </td>
          </tr>
          <tr>
            <td class="content" style="padding: 40px 5%">
              <p>
                Hello
                <span class="bold_text" style="font-weight: 600; line-height: 20px">
                  {{ customerName }},</span>
              </p>
              <div class="email_body">
                <p>
                  We regret to inform you that the recent payment for your<span class="bold_text">
                    Payrun Payment has failed .</span>
                </p>
                <p>
                  This is a friendly reminder that your Payrun subscription
                  payment is still outstanding. We understand that sometimes
                  things slip through the cracks, but we kindly request you to
                  settle the payment promptly.
                </p>
                <p class="double_margin">
                  <span class="red_bold_text">Reason for Payment Failure :</span>
                  {{ reason }}
                </p>
                <p>
                  If you’ve already made the payment, please disregard this
                  email. Otherwise, follow these steps:
                </p>
                <div>
                  <ol>
                    <li>Log in to your Payrun account.</li>
                    <li>
                      Navigate to the billing section and update your payment
                      details.
                    </li>
                  </ol>
                </div>
                <p class="double_margin">
                  If you require any assistance or have questions regarding the
                  payment failure or reactivation process, please don't hesitate
                  to contact our support team at
                  <a href="{{ url }}">support@pyrun.app</a> . We're here to help
                  you every step of the way.
                </p>
              </div>
              <div class="email_footer" style="margin-top: 24px">
                <p>Regards,</p>
                <p>Payrun</p>
                <p class="blue_text" style="color: #2c67ff">
                  support@payrun.app
                </p>
                <p>
                  <a href="{{url}}" style="text-decoration: none; color: #2c67ff">{{url}}</a>
                </p>
              </div>
            </td>
          </tr>
      {{else}}
          <tr>
            <td class="svg-img" style="
                height: 120px;
                background-image: url('https://payrun-local-public.imgix.net/payrun_logo/email_banner.png?h=500&w=1200');
                background-repeat: no-repeat;
                background-size: cover;
              ">
              <div class="header" style="
                  line-height: 20px;
                  color: white;
                  padding-left: 30px;
                  height: 100%;
                ">
                <img src="https://payrun-local-public.imgix.net/payrun_logo/logo.png" class="paryrun_logo" alt="Payrun Logo" style="max-width: 130px; height: 35px; padding-top: 20px" />
                <h1 style="
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 20px;
                    color: white;
                    margin: 0;
                    padding-top: 5px;
                  ">
                  Attention Needed: Payrun Subscription Suspended
                </h1>
              </div>
            </td>
          </tr>
          <tr>
            <td class="content" style="padding: 40px 5%">
              <p>
                Hello
                <span class="bold_text" style="font-weight: 600; line-height: 20px">
                  {{ customerName }},</span>
              </p>
              <div class="email_body">
                <p>
                  We regret to inform you that the recent payment for your
                  Payrun subscription has failed, resulting in your subscription
                  status being updated to suspended.
                </p>
                <p>Reason for Payment Failure: {{ reason }}</p>
                <p>
                  Once the payment issue has been resolved, your subscription
                  will be automatically reactivated, and you'll regain full
                  access to all Payrun features and functionalities.
                </p>
                <p>
                  If you have any questions regarding the payment failure or
                  reactivation process, please don't hesitate to contact our
                  customer support team at support@payrun.app.
                </p>
              </div>
              <div class="email_footer" style="margin-top: 24px">
                <p>Regards,</p>
                <p>Payrun</p>
                <p class="blue_text" style="color: #2c67ff">
                  support@payrun.app
                </p>
                <p>
                  <a href="{{ url }}" style="text-decoration: none; color: #2c67ff">{{url}}</a>
                </p>
              </div>
            </td>
          </tr>
      {{/if}}
    </table>
    <div class="copyright_section" style="padding-left: 5%; margin-top: 20px">
      <p style="color: #5c5d76; font-size: 12px; font-weight: 400">
        Copyright Payrun 2024
      </p>
      <p style="color: #5c5d76; font-size: 12px; font-weight: 400">
        Payrun respects your right to privacy:
        <a href="{{ url }}/privacy-policy" style="
                text-decoration: underline;
                color: #5c5d76;
                cursor: pointer;
              ">View our policy</a>
      </p>
    </div>
  </div>
</div>