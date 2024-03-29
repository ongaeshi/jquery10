require 'rubygems'
require 'sinatra'
require 'open-uri'
require 'erb'

# reloader
require "sinatra/base"
require "sinatra/reloader" if development?

NUM = 20                        # 1ページの表示数
  
get '/' do
  p = {
    :appid   => 'gFLs9RCxg65wBLXYLsx8gELmJHpYa4dq8cg1bfxalTiYgOL7u0jPeW4VrmfY6H.Zvyqh',
    :query   => params[:keywd],
    :start   => (params[:page].to_i - 1) * NUM + 1,
    :results => NUM,
  }

  q = p.map{|k,v| "#{k}=#{v}"}.join('&')

  # open('http://search.yahooapis.jp/VideoSearchService/V2/videoSearch?appid=gFLs9RCxg65wBLXYLsx8gELmJHpYa4dq8cg1bfxalTiYgOL7u0jPeW4VrmfY6H.Zvyqh&start=1&results=20&query=jQuery')
  open("http://search.yahooapis.jp/VideoSearchService/V2/videoSearch?#{q}")
end

