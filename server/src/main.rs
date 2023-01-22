#![feature(proc_macro_hygiene, decl_macro)]

pub mod handlers;
pub mod get_response_data;

#[macro_use] extern crate rocket;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/api", routes![handlers::home_handler, 
        handlers::about_handler])
}