const Airtable = require("airtable");

exports.handler = (event, context, callback) => {
  const { API_URL, API_CLIENT_ID, API_KEY } = process.env;

  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });

  const base = Airtable.base(API_CLIENT_ID);
  const data = [];

  base("projects")
    .select({
      maxRecords: 20,
      view: "Grid view"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          data.push(record);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
        } else {
          const body = JSON.stringify({ records: data });
          const response = {
            statusCode: 200,
            body: body,
            headers: {
              "content-type": "application/json",
              "cache-control": "Cache-Control: max-age=60, public"
            }
          };
          callback(null, response);
        }
      }
    );
};
