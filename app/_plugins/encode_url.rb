require 'liquid'
require 'uri'

module EncodeingURL

  def encode_url(url)
    return URI.escape(url, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
    receiver.send :include, InstanceMethods
  end
end

Liquid::Template.register_filter(EncodeingURL)
