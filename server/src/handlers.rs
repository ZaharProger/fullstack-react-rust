use rocket::serde::json::Json;

use crate::get_response_data::GetResponseData;

#[get("/home")]
pub fn home_handler() -> Json<GetResponseData> {
    Json(GetResponseData {
        result: true,
        data: "This is a Home page".to_string()
    })
}

#[get("/about")]
pub fn about_handler() -> Json<GetResponseData> {
    Json(GetResponseData {
        result: true,
        data: "This is an About page".to_string()
    })
}