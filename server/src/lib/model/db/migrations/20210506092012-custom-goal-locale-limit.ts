export const up = async function (db: any): Promise<any> {
  return db.runSql(
    `
    ALTER TABLE custom_goals MODIFY COLUMN locale_id int(11) NOT NULL;
    ALTER TABLE custom_goals ADD CONSTRAINT custom_goals_ibfk_2 FOREIGN KEY (locale_id) REFERENCES locales (id);
    `
  );
};

export const down = function (): Promise<any> {
  return null;
};
