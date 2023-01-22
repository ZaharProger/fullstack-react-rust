use rocket::serde::Serialize;

#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
pub struct GetResponseData {
    pub result: bool,
    pub data: String
}