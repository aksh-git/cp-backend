export const dummy_lead_data = [
  {
    entity_id: "1",
    progress: [
      {
        statement_id: "statement1",
        status: "completed",
        message: "Statement processed successfully.",
        transaction_status: "success",
        source: "bank",
      },
      {
        statement_id: "statement2",
        status: "pending",
        message: "Statement processing in progress.",
        transaction_status: "in progress",
        source: "bank",
      },
    ],
    accounts: [
      {
        account_category: "Savings",
        account_id: "acc123",
        account_number: "1234567890",
        account_opening_date: new Date("2022-01-01"),
        bank: "ABC Bank",
        credit_limit: 10000,
        ifsc: "ABCD1234",
        micr: "123456789",
        missing_data: [],
        od_limit: 5000,
        statements: ["statement1", "statement2"],
        months: ["January", "February"],
        country_code: "IN",
        currency_code: "INR",
        last_updated: new Date("2024-02-20"),
      },
    ],
    identity: {
      name: "John Doe",
      mobile: "1234567890",
      pan_number: "ABCDE1234F",
      date_of_birth: "1990-01-01",
      gender: "Male",
      email: "john.doe@example.com",
      city: "City",
      pincode: "123456",
      account_number: "1234567890",
      address: "123, Street Name, City",
      account_category: "Savings",
      raw_account_category: "Savings",
      account_id: "acc123",
      micr: "123456789",
      credit_limit: 10000,
      bank_name: "ABC Bank",
      ifsc: "ABCD1234",
    },
    employment: {
      occupation: "Software Engineer",
      employer_type: "Private",
      current_employer: "XYZ Inc.",
      desgination: "Senior Software Engineer",
      cwe: "XYZ123",
      official_mail_id: "john.doe@xyz.com",
      pincode: "123456",
      city: "City",
    },
    pan_api_res: {
      pan_status: "active",
      adddhar_seeding: "linked",
      pan_issuse_date: "2015-01-01",
      last_update: "2024-02-20",
      aadhaar_as_per_pan: "Aadhaar Number",
      mobile_number: "1234567890",
      email: "john.doe@example.com",
      address_as_per_pan: "123, Street Name, City",
    },
    fraud: {
      fraudulent_statements: ["statement2"],
      fraud_type: ["identity theft"],
    },
  },
  // Repeat this structure for 9 more entries
];

// bank user identity data
export const dummy_lead = {
  entity_id: "8438a668-b5f4-4925-96fb-fad89cfc7132",
  progress: [
    {
      statement_id: "007192e5-e64a-4c67-9378-a91c5a7d1494",
      status: "completed",
      message: null,
      transaction_status: "completed",
      source: "pdf",
    },
  ],
  accounts: [
    {
      account_category: "individual",
      account_id: "a8e2b89e-e8ca-478b-a90d-8df679dacf87",
      account_number: "00000034324923702",
      account_opening_date: null,
      bank: "sbi",
      credit_limit: 0,
      ifsc: "SBIN0020536",
      micr: "530002327",
      missing_data: [],
      od_limit: 0,
      statements: ["007192e5-e64a-4c67-9378-a91c5a7d1494"],
      months: [
        "2023-01",
        "2023-02",
        "2023-03",
        "2023-04",
        "2023-05",
        "2023-06",
        "2023-07",
      ],
      country_code: "IN",
      currency_code: "INR",
      last_updated: "2024-01-19T18:43:57.380716Z",
    },
  ],
  fraud: {
    fraudulent_statements: [],
    fraud_type: [],
  },
  identity: [
    {
      account_number: "00000034324923702",
      address:
        "DR NO 3-137/10 GALLAVANIPALEM AGANAMPUDI VISAKHAPATNAM-530046 Visakhapatnam",
      account_category: "individual",
      account_id: "a8e2b89e-e8ca-478b-a90d-8df679dacf87",
      raw_account_category: "REGULAR",
      name: "MR. TATAPUDI JEEVAN SREE KANTH SUNDAR",
      micr: "530002327",
      credit_limit: 0,
      bank_name: "sbi",
      ifsc: "SBIN0020536",
      metadata_analysis: {
        name_matches: [],
      },
    },
  ],
};

// bank_statement_leder_transections.json
export const dummy_lender = {
  entity_id: "8438a668-b5f4-4925-96fb-fad89cfc7132",
  progress: [
    {
      statement_id: "007192e5-e64a-4c67-9378-a91c5a7d1494",
      status: "completed",
      message: null,
      source: "pdf",
    },
  ],
  accounts: [
    {
      account_category: "individual",
      account_id: "a8e2b89e-e8ca-478b-a90d-8df679dacf87",
      account_number: "00000034324923702",
      account_opening_date: null,
      bank: "sbi",
      credit_limit: 0,
      ifsc: "SBIN0020536",
      micr: "530002327",
      missing_data: [],
      od_limit: 0,
      statements: ["007192e5-e64a-4c67-9378-a91c5a7d1494"],
      months: [
        "2023-01",
        "2023-02",
        "2023-03",
        "2023-04",
        "2023-05",
        "2023-06",
        "2023-07",
      ],
      country_code: "IN",
      currency_code: "INR",
      last_updated: "2024-01-19T18:43:57.380716Z",
    },
  ],
  fraud: {
    fraudulent_statements: [],
    fraud_type: [],
  },
  transactions: [
    {
      transaction_type: "debit",
      transaction_note:
        "TO TRANSFER- UPI/DR/345621268669/Tatapu di/SBIN/8978364652/Payme-",
      chq_num: "TRANSFER TO 4694295162094",
      amount: 5000,
      balance: 148310.78,
      date: "2023-03-31 00:00:00",
      transaction_channel: "upi",
      merchant_category: "loans",
      description: "lender_transaction",
      hash: "8214d72072a481fe46b78e2045fc49ad",
      account_id: "a8e2b89e-e8ca-478b-a90d-8df679dacf87",
    },
    {
      transaction_type: "debit",
      transaction_note:
        "TO TRANSFER- UPI/DR/345678871530/Tatapu di/SBIN/8978364652/Payme-",
      chq_num: "TRANSFER TO 4694223162099",
      amount: 5000,
      balance: 79315.07,
      date: "2023-03-31 00:00:00",
      transaction_channel: "upi",
      merchant_category: "loans",
      description: "lender_transaction",
      hash: "97c63c9e6f25f87bb4605a52cb279a97",
      account_id: "a8e2b89e-e8ca-478b-a90d-8df679dacf87",
    },
    {
      transaction_type: "debit",
      transaction_note:
        "TO TRANSFER- UPI/DR/348843482689/Tatapu di/SBIN/8978364652/Payme-",
      chq_num: "TRANSFER TO 4897691162095",
      amount: 5000,
      balance: 39638.09,
      date: "2023-05-02 00:00:00",
      transaction_channel: "upi",
      merchant_category: "loans",
      description: "lender_transaction",
      hash: "0cbeade2739d117c7eddde8b15ee7ce9",
      account_id: "a8e2b89e-e8ca-478b-a90d-8df679dacf87",
    },
  ],
};

// bank statement user identity .json
export const bank_statement_user_identity_json = `{"entity_id":"8438a668-b5f4-4925-96fb-fad89cfc7132","progress":[{"statement_id":"007192e5-e64a-4c67-9378-a91c5a7d1494","status":"completed","message":null,"transaction_status":"completed","source":"pdf"}],"accounts":[{"account_category":"individual","account_id":"a8e2b89e-e8ca-478b-a90d-8df679dacf87","account_number":"00000034324923702","account_opening_date":null,"bank":"sbi","credit_limit":0,"ifsc":"SBIN0020536","micr":"530002327","missing_data":[],"od_limit":0,"statements":["007192e5-e64a-4c67-9378-a91c5a7d1494"],"months":["2023-01","2023-02","2023-03","2023-04","2023-05","2023-06","2023-07"],"country_code":"IN","currency_code":"INR","last_updated":"2024-01-19T18:43:57.380716Z"}],"fraud":{"fraudulent_statements":[],"fraud_type":[]},"identity":[{"account_number":"00000034324923702","address":"DR NO 3-137/10 GALLAVANIPALEM AGANAMPUDI VISAKHAPATNAM-530046 Visakhapatnam","account_category":"individual","account_id":"a8e2b89e-e8ca-478b-a90d-8df679dacf87","raw_account_category":"REGULAR","name":"MR. TATAPUDI JEEVAN SREE KANTH SUNDAR","micr":"530002327","credit_limit":0,"bank_name":"sbi","ifsc":"SBIN0020536","metadata_analysis":{"name_matches":[]}}]}`;

export const bank_statement_analysis_json = `{"entity_id":"8438a668-b5f4-4925-96fb-fad89cfc7132","progress":[{"statement_id":"007192e5-e64a-4c67-9378-a91c5a7d1494","status":"completed","message":null,"source":"pdf"}],"monthly_analysis":{"opening_balance":{"Jan-2023":2001.0,"Feb-2023":180564.0,"Mar-2023":83369.08,"Apr-2023":79315.07,"May-2023":127589.09,"Jun-2023":114949.71,"Jul-2023":145326.79},"closing_balance":{"Jan-2023":180564.0,"Feb-2023":83369.08,"Mar-2023":79315.07,"Apr-2023":127589.09,"May-2023":114949.71,"Jun-2023":145326.79,"Jul-2023":195482.93},"median_balance":{"Jan-2023":180564.0,"Feb-2023":1591.25,"Mar-2023":14401.78,"Apr-2023":8060.09,"May-2023":21564.09,"Jun-2023":14427.39,"Jul-2023":115870.0},"mode_balance":{"Jan-2023":180564.0,"Feb-2023":1591.25,"Mar-2023":14401.78,"Apr-2023":561.09,"May-2023":7646.95,"Jun-2023":14427.39,"Jul-2023":49446.5},"avg_bal":{"Jan-2023":180564.0,"Feb-2023":28396.54,"Mar-2023":14250.02,"Apr-2023":21123.85,"May-2023":27226.79,"Jun-2023":35109.71,"Jul-2023":149708.5},"cnt_transactions":{"Jan-2023":2,"Feb-2023":17,"Mar-2023":19,"Apr-2023":22,"May-2023":35,"Jun-2023":49,"Jul-2023":129},"amt_debit":{"Jan-2023":10000.0,"Feb-2023":334019.92,"Mar-2023":198961.71,"Apr-2023":177189.0,"May-2023":221918.24,"Jun-2023":238702.75,"Jul-2023":708518.07},"cnt_debit":{"Jan-2023":1,"Feb-2023":12,"Mar-2023":14,"Apr-2023":15,"May-2023":27,"Jun-2023":40,"Jul-2023":116},"amt_credit":{"Jan-2023":188563.0,"Feb-2023":236825.0,"Mar-2023":194907.7,"Apr-2023":225463.02,"May-2023":209278.86,"Jun-2023":269079.83,"Jul-2023":758674.21},"cnt_credit":{"Jan-2023":1,"Feb-2023":5,"Mar-2023":5,"Apr-2023":7,"May-2023":8,"Jun-2023":9,"Jul-2023":13},"max_bal":{"Jan-2023":190564.0,"Feb-2023":192564.0,"Mar-2023":153310.78,"Apr-2023":174208.09,"May-2023":147774.95,"Jun-2023":145326.79,"Jul-2023":379918.0},"min_bal":{"Jan-2023":2001.0,"Feb-2023":735.75,"Mar-2023":385.78,"Apr-2023":561.09,"May-2023":3647.95,"Jun-2023":168.79,"Jul-2023":20957.5},"max_eod_balance":{"Jan-2023":180564.0,"Feb-2023":192564.0,"Mar-2023":79315.07,"Apr-2023":127589.09,"May-2023":114949.71,"Jun-2023":145326.79,"Jul-2023":379500.0},"min_eod_balance":{"Jan-2023":180564.0,"Feb-2023":735.75,"Mar-2023":385.78,"Apr-2023":561.09,"May-2023":6646.95,"Jun-2023":168.79,"Jul-2023":20957.5},"amt_international_transaction_arbitrage_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_international_transaction_arbitrage_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_bank_interest_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":143.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":180.0,"Jul-2023":0.0},"cnt_bank_interest_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":1,"Apr-2023":0,"May-2023":0,"Jun-2023":1,"Jul-2023":0},"amt_refund_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_refund_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_cash_deposit_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_cash_deposit_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_upi_credit":{"Jan-2023":0.0,"Feb-2023":90000.0,"Mar-2023":40500.0,"Apr-2023":51700.0,"May-2023":81124.0,"Jun-2023":35340.0,"Jul-2023":171100.0},"cnt_upi_credit":{"Jan-2023":0,"Feb-2023":4,"Mar-2023":2,"Apr-2023":5,"May-2023":6,"Jun-2023":6,"Jul-2023":6},"amt_net_banking_transfer_credit":{"Jan-2023":188563.0,"Feb-2023":146825.0,"Mar-2023":154264.7,"Apr-2023":173763.02,"May-2023":128154.86,"Jun-2023":233559.83,"Jul-2023":507504.61},"cnt_net_banking_transfer_credit":{"Jan-2023":1,"Feb-2023":1,"Mar-2023":2,"Apr-2023":2,"May-2023":2,"Jun-2023":2,"Jul-2023":4},"amt_auto_debit_payment_bounce_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_auto_debit_payment_bounce_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_chq_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":80000.0},"cnt_chq_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":1},"amt_investment_cashin_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_investment_cashin_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_inward_cheque_bounce_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_inward_cheque_bounce_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_self_transfer_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":10000.0,"Jul-2023":0.0},"cnt_self_transfer_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":1,"Jul-2023":0},"amt_international_transaction_arbitrage_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_international_transaction_arbitrage_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_bill_payment_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_bill_payment_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_cash_withdrawl_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_cash_withdrawl_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_bank_charge_debit":{"Jan-2023":0.0,"Feb-2023":147.5,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_bank_charge_debit":{"Jan-2023":0,"Feb-2023":1,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_debit_card_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_debit_card_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_outward_cheque_bounce_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_outward_cheque_bounce_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_chq_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_chq_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_upi_debit":{"Jan-2023":10000.0,"Feb-2023":285872.42,"Mar-2023":150961.71,"Apr-2023":129189.0,"May-2023":163918.24,"Jun-2023":150702.75,"Jul-2023":647959.07},"cnt_upi_debit":{"Jan-2023":1,"Feb-2023":8,"Mar-2023":11,"Apr-2023":12,"May-2023":23,"Jun-2023":35,"Jul-2023":110},"amt_auto_debit_payment_debit":{"Jan-2023":0.0,"Feb-2023":48000.0,"Mar-2023":48000.0,"Apr-2023":48000.0,"May-2023":48000.0,"Jun-2023":88000.0,"Jul-2023":50559.0},"cnt_auto_debit_payment_debit":{"Jan-2023":0,"Feb-2023":3,"Mar-2023":3,"Apr-2023":3,"May-2023":3,"Jun-2023":5,"Jul-2023":5},"amt_net_banking_transfer_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":10000.0,"Jun-2023":0.0,"Jul-2023":10000.0},"cnt_net_banking_transfer_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":1,"Jun-2023":0,"Jul-2023":1},"amt_payment_gateway_purchase_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_payment_gateway_purchase_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_self_transfer_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_self_transfer_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_emi_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":10000.0,"Apr-2023":0.0,"May-2023":5000.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_emi_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":2,"Apr-2023":0,"May-2023":1,"Jun-2023":0,"Jul-2023":0},"avg_emi":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":5000.0,"Apr-2023":0.0,"May-2023":5000.0,"Jun-2023":0.0,"Jul-2023":0.0},"amt_investment":{"Jan-2023":10000.0,"Feb-2023":10000.0,"Mar-2023":10000.0,"Apr-2023":25421.0,"May-2023":60500.0,"Jun-2023":20000.0,"Jul-2023":0.0},"cnt_investment":{"Jan-2023":1,"Feb-2023":1,"Mar-2023":1,"Apr-2023":4,"May-2023":5,"Jun-2023":2,"Jul-2023":0},"amt_outward_cheque_bounce_insuff_funds_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_outward_cheque_bounce_insuff_funds_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_ach_bounce_charge":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_ach_bounce_charge":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_chq_bounce_charge":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_chq_bounce_charge":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_min_bal_charge":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_min_bal_charge":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_bounce_charge":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_bounce_charge":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"cnt_business_credit":{"Jan-2023":1,"Feb-2023":5,"Mar-2023":4,"Apr-2023":5,"May-2023":6,"Jun-2023":7,"Jul-2023":9},"amt_business_credit":{"Jan-2023":188563.0,"Feb-2023":236825.0,"Mar-2023":194764.7,"Apr-2023":224947.0,"May-2023":209127.0,"Jun-2023":258899.83,"Jul-2023":758429.62},"amt_income_credit":{"Jan-2023":188563.0,"Feb-2023":236825.0,"Mar-2023":194907.7,"Apr-2023":225463.02,"May-2023":209278.86,"Jun-2023":259079.83,"Jul-2023":758674.21},"cnt_income_credit":{"Jan-2023":1,"Feb-2023":5,"Mar-2023":5,"Apr-2023":7,"May-2023":8,"Jun-2023":8,"Jul-2023":13},"cnt_loan_credits":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_loan_credits":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_emi_bounce_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_emi_bounce_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"amt_inward_cheque_bounce_insuff_funds_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_inward_cheque_bounce_insuff_funds_credit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_credit_card_bill_debit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_credit_card_bill_debit":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"turnover_excluding_loan_and_self_credit":{"Jan-2023":188563.0,"Feb-2023":236825.0,"Mar-2023":194907.7,"Apr-2023":225463.02,"May-2023":209278.86,"Jun-2023":259079.83,"Jul-2023":758674.21},"net_cash_inflow":{"Jan-2023":178563.0,"Feb-2023":-97194.92,"Mar-2023":-4054.01,"Apr-2023":48274.02,"May-2023":-12639.38,"Jun-2023":30377.08,"Jul-2023":50156.14},"avg_credit_transaction_size":{"Jan-2023":188563.0,"Feb-2023":47365.0,"Mar-2023":38981.54,"Apr-2023":32209.0,"May-2023":26159.86,"Jun-2023":29897.76,"Jul-2023":58359.55},"avg_debit_transaction_size":{"Jan-2023":10000.0,"Feb-2023":27834.99,"Mar-2023":14211.55,"Apr-2023":11812.6,"May-2023":8219.19,"Jun-2023":5967.57,"Jul-2023":6107.91},"avg_bal_multipleof5":{"Jan-2023":null,"Feb-2023":52543.0,"Mar-2023":14814.0,"Apr-2023":28085.0,"May-2023":30382.0,"Jun-2023":48721.0,"Jul-2023":152725.0},"eod_balance_lt_500_2_months_gte_10":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":2.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":1.0,"Jul-2023":0.0},"total_amount_of_salary":{"Jan-2023":188563.0,"Feb-2023":146825.0,"Mar-2023":152782.0,"Apr-2023":173447.0,"May-2023":128127.0,"Jun-2023":134893.0,"Jul-2023":285770.0},"number_of_salary_transactions":{"Jan-2023":1.0,"Feb-2023":1.0,"Mar-2023":1.0,"Apr-2023":1.0,"May-2023":1.0,"Jun-2023":1.0,"Jul-2023":1.0},"perc_salary_spend_bill_payment":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"perc_salary_spend_cash_withdrawl":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"perc_salary_spend_debit_card":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"perc_salary_spend_net_banking_transfer":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"perc_salary_spend_upi":{"Jan-2023":5.0,"Feb-2023":44.0,"Mar-2023":48.0,"Apr-2023":27.0,"May-2023":26.0,"Jun-2023":7.0,"Jul-2023":45.0},"sum_salary_spent_within_5_days_of_credit":{"Jan-2023":10000.0,"Feb-2023":64191.67,"Mar-2023":73995.71,"Apr-2023":46619.0,"May-2023":32825.24,"Jun-2023":10000.0,"Jul-2023":128927.57},"perc_salary_amt_debit_within5_days":{"Jan-2023":0.05,"Feb-2023":0.44,"Mar-2023":0.48,"Apr-2023":0.27,"May-2023":0.26,"Jun-2023":0.07,"Jul-2023":0.45},"cnt_stop_emi_charge":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_stop_emi_charge":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_days_eod_bal_lt_25000":{"Jan-2023":0,"Feb-2023":22,"Mar-2023":28,"Apr-2023":24,"May-2023":17,"Jun-2023":22,"Jul-2023":4},"perc_inward_bounce":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"perc_outward_bounce":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"perc_cash_deposit_to_total_credit":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"net_credit_count":{"Jan-2023":1.0,"Feb-2023":5.0,"Mar-2023":5.0,"Apr-2023":7.0,"May-2023":8.0,"Jun-2023":8.0,"Jul-2023":13.0},"net_debit_count":{"Jan-2023":1.0,"Feb-2023":12.0,"Mar-2023":12.0,"Apr-2023":15.0,"May-2023":26.0,"Jun-2023":40.0,"Jul-2023":116.0},"net_credit_amount":{"Jan-2023":188563.0,"Feb-2023":236825.0,"Mar-2023":194907.7,"Apr-2023":225463.02,"May-2023":209278.86,"Jun-2023":259079.83,"Jul-2023":758674.21},"net_debit_amount":{"Jan-2023":10000.0,"Feb-2023":334019.92,"Mar-2023":188961.71,"Apr-2023":177189.0,"May-2023":216918.24,"Jun-2023":238702.75,"Jul-2023":708518.07},"cnt_days_account_overdrawn":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"max_overdraft_balance":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"amt_tax_gst_paid":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0},"cnt_ccod_interest":{"Jan-2023":0,"Feb-2023":0,"Mar-2023":0,"Apr-2023":0,"May-2023":0,"Jun-2023":0,"Jul-2023":0},"amt_ccod_interest":{"Jan-2023":0.0,"Feb-2023":0.0,"Mar-2023":0.0,"Apr-2023":0.0,"May-2023":0.0,"Jun-2023":0.0,"Jul-2023":0.0}}}`;
