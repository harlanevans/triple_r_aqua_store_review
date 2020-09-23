class RemoveGallonSizeFromAqua < ActiveRecord::Migration[6.0]
  def change
    remove_column :aquas, :gallon_size, :string
  end
end
