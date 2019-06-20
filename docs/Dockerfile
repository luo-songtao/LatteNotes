FROM jekyll/jekyll:pages

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/ && \
    gem sources -l

RUN apk update && \
	apk add ruby-dev gcc make curl build-base libc-dev libffi-dev zlib-dev libxml2-dev libgcrypt-dev libxslt-dev python

COPY Gemfile* /srv/jekyll/

WORKDIR /srv/jekyll

RUN bundle config build.nokogiri --use-system-libraries && \
	bundle install

EXPOSE 4000