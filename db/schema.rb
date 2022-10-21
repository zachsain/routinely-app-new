# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_19_190011) do
  create_table "activities", force: :cascade do |t|
    t.date "date"
    t.string "title"
    t.string "category"
    t.string "duration"
    t.text "description"
    t.integer "likes"
    t.integer "user_id"
    t.integer "routine_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "activity_comments", force: :cascade do |t|
    t.text "comment"
    t.integer "user_id"
    t.integer "activity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "routine_comments", force: :cascade do |t|
    t.text "comment"
    t.integer "user_id"
    t.integer "routine_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "routines", force: :cascade do |t|
    t.date "date"
    t.string "title"
    t.string "category"
    t.text "instructions"
    t.string "duration"
    t.string "video_url"
    t.integer "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "image_url"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

# There is also --noautocomplete option that can be passed to irb command.
# echo 'IRB.conf[:USE_AUTOCOMPLETE] = false' >> ~/.irbrc
