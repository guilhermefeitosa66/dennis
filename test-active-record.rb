require "active_record"

class User < ActiveRecord::Base
	establish_connection adapter: "sqlite3", database: "foobar.db"
  	connection.create_table table_name, force: true do |t|
    	t.string :name
	end

end