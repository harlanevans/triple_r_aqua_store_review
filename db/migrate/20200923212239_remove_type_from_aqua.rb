class RemoveTypeFromAqua < ActiveRecord::Migration[6.0]
  def change
    remove_column :aquas, :type, :string
    add_column :aquas, :water, :string
  end
end
