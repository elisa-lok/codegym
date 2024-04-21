class ChangeColumnToQuestionsDislikeCountDislikesCount < ActiveRecord::Migration[7.1]
  def change
    rename_column :questions, :dislike_count, :dislikes_count
  end
end
