class CreateAquas < ActiveRecord::Migration[6.0]
  def change
    create_table :aquas do |t|
      t.string :gallon_size
      t.string :type

      t.timestamps
    end
  end
end
