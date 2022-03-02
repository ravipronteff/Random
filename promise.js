responseByDate = (fromdate, todate, tow_id) => {
  let data = new Promise((resolve, reject) => {
    axiosWeb
      .post("/send_mail_daily_report", {
        tow_company_id: tow_id,
        from_date: fromdate,
        to_date: todate,
      })
      .then((resp) => resolve(resp.data))
      .catch((err) => reject(err));
  });
  return data;
};
4:54
let date_response = await responseByDate(dt.fdate, dt.tdate, 1000);
