class AddSizeToAquas < ActiveRecord::Migration[6.0]
  def change
    add_column :aquas, :size, :string
  end
end
