class Api::AquasController < ApplicationController

  def index
    render json: Aqua.all
  end

  def create
    binding.pry
    a = Aqua.new(aqua_params)
    if a.save
      render json: a
    else
      render json: {message: "Oopsie Whoopsie"}
    end
  end
  
  def update
    a = Aqua.find(params[:id])
    if a.update(aqua_params)
      render json: a
    else
      render json: {message: "Oopsie Whoopsie"}
    end
  end

  def destroy
    Aqua.find(params[:id]).destroy
  end

  private

  # def set_aqua
  # end

  def aqua_params
    params.require(:aqua).permit(:size, :water)
  end

end
